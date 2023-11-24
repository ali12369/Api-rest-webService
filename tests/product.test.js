import { getByIdproduct, getManyProduct, createProduct, putByIdproduct, deleteByIdproduct } from '../controllers/productController';

describe('createProduct', () => {
    test('should create a new product', async () => {
    const req = { body: { name: 'TestProduct', id: '123' } };
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
    };  

    await createProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Product created successfully' });
    });
});


describe('getManyProduct', () => {
    test('should return an array of products', async () => {
    const req = {};
    const res = {
    send: jest.fn(),
    };

    await getManyProduct(req, res);

    expect(res.send).toHaveBeenCalled();

    });
});

describe('getByIdproduct', () => {
    test('should return a single product by ID', async () => {
        const req = { params: { productId: 'yourProductId' } }; 
        const res = {
        send: jest.fn(),
        };

        await getByIdproduct(req, res);

        expect(res.send).toHaveBeenCalled();
    });
});

describe('putByIdproduct', () => {
    test('should update a product by ID', async () => {
        const req = { params: { productId: 'yourProductId' }, body: { name: 'UpdatedProduct' } };
        const res = {
        send: jest.fn(),
        };

        await putByIdproduct(req, res);

        expect(res.send).toHaveBeenCalled();
    });
});


describe('deleteByIdproduct', () => {
    test('should delete a product by ID', async () => {
    const req = { params: { productId: 'yourProductId' } };
    const res = {
        send: jest.fn(),
    };

    await deleteByIdproduct(req, res);

    expect(res.send).toHaveBeenCalled();
    });
});