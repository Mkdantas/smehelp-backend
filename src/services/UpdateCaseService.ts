import prismaClient from '../prisma';
import { io } from '../app';

class UpdateCaseService {
  async execute(
    id: string,
    status: string,
    problem_solution?: string,
    sme?: string,
    on_close_status?: string
  ) {
    const updateCase = await prismaClient.case.update({
      where: {
        id
      },
      data: {
        problem_solution,
        status,
        sme,
        on_close_status
      },
    });

    io.emit('update', {
      id,
      status,
    });

    return updateCase;
  }
}

export { UpdateCaseService };
