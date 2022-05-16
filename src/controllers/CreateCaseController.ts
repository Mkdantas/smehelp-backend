import { Request, Response } from 'express';
import { CreateCaseService } from '../services/CreateCaseService';

class CreateCaseController {
    async handle(req: Request, res: Response) {
        const { case_number, agent, problem_description, status, on_call, type } = req.body;

        const service = new CreateCaseService();
        const result = await service.execute(case_number, agent, problem_description, status, on_call, type);

        return res.json(result)
    }
}

export { CreateCaseController }