import { Request, Response } from 'express';
import { DeleteCaseService } from '../services/DeleteCaseService';

class DeleteCaseController {
    async handle(req: Request, res: Response) {
        const {id } = req.params;

        const service = new DeleteCaseService();
        const result = await service.execute(id);

        return res.json(result)
    }
}

export { DeleteCaseController }