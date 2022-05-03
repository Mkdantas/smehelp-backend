import { Router } from 'express';
import { CreateCaseController } from './controllers/CreateCaseController';
import { GetAllCasesController } from './controllers/GetAllCasesController';
import { GetOpenCasesController } from './controllers/GetOpenCasesController';
import { GetPendingCasesController } from './controllers/GetPendingCasesController';
import { GetUnassignedCasesController } from './controllers/GetUnassignedCasesController';

const router = Router();

router.post('/create_case', new CreateCaseController().handle)


router.get('/all_cases', new GetAllCasesController().handle)
router.get('/unassigned_cases', new GetUnassignedCasesController().handle)
router.get('/open_cases', new GetOpenCasesController().handle)
router.get('/pending_cases', new GetPendingCasesController().handle)

export { router };