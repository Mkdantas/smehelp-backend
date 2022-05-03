import { Request, Response } from 'express';
import { GetUnassignedCasesService } from '../services/GetUnassignedCasesService';


class GetUnassignedCasesController {
    async handle(req: Request, res: Response){

        const service = new GetUnassignedCasesService()

        const result = await service.execute();

        return res.json(result)
    }
}

export { GetUnassignedCasesController }