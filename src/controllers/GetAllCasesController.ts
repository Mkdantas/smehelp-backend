import { Request, Response } from 'express';
import { GetAllCasesService } from '../services/GetAllCasesService';

class GetAllCasesController{
    async handle(req: Request, res: Response){

        const service = new GetAllCasesService();

        const result = await service.execute();

        res.json(result)
    }
}

export { GetAllCasesController }