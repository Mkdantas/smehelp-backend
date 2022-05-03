import { Request, Response } from 'express';
import { UpdateCaseService } from '../services/UpdateCaseService';

class UpdateCaseController {
    async handle(req: Request, res: Response) {
        const {problem_description, problem_solution, status, on_call } = req.body;
        const { id } = req.params

        const service = new UpdateCaseService();
        let result;
        if(status == 'pending' || status == 'closed'){
            result = await service.execute(id, problem_description, problem_solution, status, on_call);
        } else if(status == 'open'){
            result = await service.execute(id, status);
        }

        return res.json(result)
    }
}

export { UpdateCaseController }