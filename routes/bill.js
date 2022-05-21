import {Router} from 'express';
import {getBills,getBillsDetails,getBillsFilter,createBill,editBill} from '../controllers/bill.controller';

const router= Router();

router.get('/', getBills);
router.get('/details/:id', getBillsDetails);
router.get('/filter/:month/:year', getBillsFilter);

router.post('/', createBill);

router.put('/', editBill);

export default router;