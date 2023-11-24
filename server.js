const express = require("express");
const cors = require("cors");
const connectDatabase = require("./db/conn");
const userRoutes = require("./Routers/userRouter");

connectDatabase();

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  
  const cacheDuration = 60 * 1000; // la durée

  
  const etag = generateEtag(req);

  // Vérifiez si la demande inclut un en-tête If-None-Match correspondant à l'Etag généré
  if (req.headers["if-none-match"] === etag) {
    return res.status(304).end();
  }

  res.setHeader("Cache-Control", `public, max-age=${cacheDuration / 1000}`);
  res.setHeader("Expires", new Date(Date.now() + cacheDuration).toUTCString());
  res.setHeader("Etag", etag);

  next();
});

app.use("/api", userRoutes);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server started on port ${port} in DEVELOPMENT mode.`);
});

function generateEtag(req) {
  // Vous pouvez implémenter votre propre logique pour générer un Etag unique
  // En fonction des données de la demande
  return hashString(JSON.stringify(req.headers) + req.url);
}

function hashString(str) {
  const crypto = require("crypto");
  const sha1 = crypto.createHash("sha1");
  sha1.update(str);
  return sha1.digest("hex");
}
