import prismaClient from "../prisma";

class GetAllCasesService{
    async execute(){
        const cases = await prismaClient.case.findMany({
            orderBy:{
                created_at: 'desc'
            }
        })

        return cases
    }
}

export { GetAllCasesService }