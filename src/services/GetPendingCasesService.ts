import prismaClient from "../prisma";

class GetPendingCasesService {
    async execute(){
        const cases = await prismaClient.case.findMany({
            orderBy:{
                on_call: 'asc'
            }, 
            where: {
                status: 'pending'
            }
        })

        return cases
    }
}

export { GetPendingCasesService }