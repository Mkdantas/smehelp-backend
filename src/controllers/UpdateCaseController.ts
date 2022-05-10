import { Request, Response } from 'express';
import { UpdateCaseService } from '../services/UpdateCaseService';

class UpdateCaseController {
  async handle(req: Request, res: Response) {
    const { problem_description, problem_solution, status, on_call, sme, on_close_status } =
      req.body;
    const { id } = req.params;

    const service = new UpdateCaseService();
    let result;
    result = await service.execute(
      id,
      status,
      problem_description,
      problem_solution,
      on_call,
      sme,
      on_close_status
    );

    return res.json(result);
  }
}

export { UpdateCaseController };
