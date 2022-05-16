import { io } from '../app';
import prismaClient from '../prisma';

class CreateCaseService {
    async execute(case_number: string, agent: string, problem_description: string, status: string, on_call: boolean, type: string){
        const createCase = await prismaClient.case.create({
            data: {
                case_number,
                agent,
                problem_description,
                status,
                on_call,
                type
            }
        })

        const caseInfo = {
            case_number: createCase.case_number,
            id: createCase.id,
            created_at: createCase.created_at,
            agent: createCase.agent,
            problem_description: createCase.problem_description,
            status: createCase.status,
            on_call: createCase.on_call

        }

        io.emit("new_case", caseInfo)

        return createCase
    }
}

export { CreateCaseService }