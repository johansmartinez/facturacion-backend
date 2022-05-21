import {Router} from 'express';
import {getPurchases,createPurchase} from '../controllers/purchase.controller';

const router= Router();

router.get('/', getPurchases);

router.post('/', createPurchase);


export default router;