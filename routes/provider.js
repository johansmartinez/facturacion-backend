import {Router} from 'express';
import {getProviders,createProvider,editProvider, deleteProvider} from '../controllers/provider.controller';

const router= Router();

router.get('/', getProviders);

router.post('/', createProvider);

router.put('/', editProvider);

router.delete('/:nif', deleteProvider);


export default router;