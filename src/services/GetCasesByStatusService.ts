import prismaClient from "../prisma";

class GetCasesByStatusService {
    async execute(status: string, type: string, on_call?: string){
        const cases = await prismaClient.case.findMany({
            orderBy:{
                on_call: 'asc'
            }, 
            where: {
                status,
                type
            }
        })

        return cases
    }
}

export { GetCasesByStatusService }