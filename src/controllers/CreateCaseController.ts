import { Request, Response } from 'express';
import { CreateCaseService } from '../services/CreateCaseService';

class CreateCaseController {
    async handle(req: Request, res: Response) {
        const { case_number, agent, problem_description, problem_solution, status } = req.body;

        const service = new CreateCaseService();
        const result = await service.execute(case_number, agent, problem_description, problem_solution, status);

        return res.json(result)
    }
}

export { CreateCaseController }