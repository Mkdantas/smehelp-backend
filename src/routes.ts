import { Router } from 'express';
import { CreateCaseController } from './controllers/CreateCaseController';
import { DeleteCaseController } from './controllers/DeleteCaseController';
import { GetAllCasesController } from './controllers/GetAllCasesController';
import { GetCasesByStatusController } from './controllers/GetCasesByStatusController';
import { UpdateCaseController } from './controllers/UpdateCaseController';

const router = Router();

router.post('/cases', new CreateCaseController().handle)

router.put('/cases/:id', new UpdateCaseController().handle)

router.get('/cases', new GetAllCasesController().handle)
router.get('/cases/:status', new GetCasesByStatusController().handle)

router.delete('/cases/:id', new DeleteCaseController().handle)

export { router };