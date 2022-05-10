import { io } from '../app';
import prismaClient from '../prisma';

class CreateCaseService {
    async execute(case_number: string, agent: string, problem_description: string, problem_solution:string, status: string, on_call: boolean, sme?: string, on_close_status?: string){
        const createCase = await prismaClient.case.create({
            data: {
                case_number,
                agent,
                problem_description,
                problem_solution,
                status,
                on_call,
                sme,
                on_close_status
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