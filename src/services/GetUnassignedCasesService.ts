import prismaClient from "../prisma";

class GetUnassignedCasesService {
    async execute(){
        const cases = await prismaClient.case.findMany({
            orderBy:{
                on_call: 'desc'
            }, 
            where: {
                status: 'unassigned'
            }
        })

        return cases
    }
}

export { GetUnassignedCasesService }