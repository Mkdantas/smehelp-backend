import { Request, Response } from 'express';
import { GetCasesByStatusService } from '../services/GetCasesByStatusService';


class GetCasesByStatusController {
    async handle(req: Request, res: Response){
        const {status} = req.params;
        const {on_call} = req.body
        const service = new GetCasesByStatusService()

        let result;
        if(on_call){
            result = await service.execute(status, on_call);
        } else {
            result = await service.execute(status)
        }

        return res.json(result)
    }
}

export { GetCasesByStatusController }