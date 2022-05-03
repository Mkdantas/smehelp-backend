import prismaClient from '../prisma';

class CreateCaseService {
    async execute(case_number: string, agent: string, problem_description: string, problem_solution:string, status: string){
        const createCase = await prismaClient.case.create({
            data: {
                case_number,
                agent,
                problem_description,
                problem_solution,
                status
            }
        })

        return createCase
        
        //scocket.io stuff here.
    }
}

export { CreateCaseService }