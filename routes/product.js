import {Router} from 'express';
import {getProducts,createProduct,editProduct} from '../controllers/product.controller';

const router= Router();

router.get('/', getProducts);

router.post('/', createProduct);

router.put('/', editProduct);

export default router;