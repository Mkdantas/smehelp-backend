import prismaClient from "../prisma";

class GetOpenCasesService {
    async execute(){
        const cases = await prismaClient.case.findMany({
            orderBy:{
                on_call: 'asc'
            }, 
            where: {
                status: 'open'
            }
        })

        return cases
    }
}

export { GetOpenCasesService }