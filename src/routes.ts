import { Router } from 'express';
import { CreateCaseController } from './controllers/CreateCaseController';
import { GetUnassignedCasesController } from './controllers/GetUnassignedCasesController';

const router = Router();

router.post('/create_case', new CreateCaseController().handle)


router.get('/all_cases', () => {

})
router.get('/unassigned_cases', new GetUnassignedCasesController().handle)
router.get('/open_cases', () => {

})
router.get('pending_cases', () => {

})

export { router };