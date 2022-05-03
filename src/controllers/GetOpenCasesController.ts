import { Request, Response } from 'express';
import { GetOpenCasesService } from '../services/GetOpenCasesService';


class GetOpenCasesController {
    async handle(req: Request, res: Response){

        const service = new GetOpenCasesService()

        const result = await service.execute();

        return res.json(result)
    }
}

export { GetOpenCasesController }