import { Router } from 'express';
import { CreateCaseController } from './controllers/CreateCaseController';

const router = Router();

router.post('/create_case', new CreateCaseController().handle)

export { router };