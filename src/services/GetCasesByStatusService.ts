import prismaClient from "../prisma";

class GetCasesByStatusService {
    async execute(status: string, on_call?: string){
        const cases = await prismaClient.case.findMany({
            orderBy:{
                on_call: 'asc'
            }, 
            where: {
                status
            }
        })

        return cases
    }
}

export { GetCasesByStatusService }