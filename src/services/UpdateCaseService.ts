import prismaClient from '../prisma';

class UpdateCaseService {
    async execute(id: string, status: string, problem_description?: string, problem_solution?:string, on_call?: boolean){
        const updateCase = await prismaClient.case.update({
            where:{
                id 
            },
            data: {
                problem_description,
                problem_solution,
                status,
                on_call
            }
        })

        return updateCase
    }
}

export { UpdateCaseService }