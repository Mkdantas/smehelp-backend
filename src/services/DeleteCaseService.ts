import prismaClient from '../prisma';

class DeleteCaseService {
    async execute(id: string){
        const deleteCase = await prismaClient.case.delete({
            where: {
                id
            }
        })

        return deleteCase
    }
}

export { DeleteCaseService }