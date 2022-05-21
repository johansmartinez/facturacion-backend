import {Router} from 'express';
import {getClients,createClient,editClient} from '../controllers/client.controller';

const router= Router();

router.get('/', getClients);

router.post('/', createClient);

router.put('/', editClient);

export default router;