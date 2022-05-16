import { Request, Response } from 'express';
import { UpdateCaseService } from '../services/UpdateCaseService';

class UpdateCaseController {
  async handle(req: Request, res: Response) {
    const { problem_solution, status, sme, on_close_status } =
      req.body;
    const { id } = req.params;

    const service = new UpdateCaseService();

    const result = await service.execute(
      id,
      status,
      problem_solution,
      sme,
      on_close_status
    );

    return res.json(result);
  }
}

export { UpdateCaseController };
