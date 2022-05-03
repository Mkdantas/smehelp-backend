import { Request, Response } from 'express';
import { GetPendingCasesService } from '../services/GetPendingCasesService';


class GetPendingCasesController {
    async handle(req: Request, res: Response){

        const service = new GetPendingCasesService()

        const result = await service.execute();

        return res.json(result)
    }
}

export { GetPendingCasesController }