import { Request, Response } from 'express';
import { GetCasesByStatusService } from '../services/GetCasesByStatusService';


class GetCasesByStatusController {
    async handle(req: Request, res: Response){
        const {status} = req.params;
        const {on_call, type} = req.body
        const service = new GetCasesByStatusService()

        const result = await service.execute(status, type, on_call);
       

        return res.json(result)
    }
}

export { GetCasesByStatusController }