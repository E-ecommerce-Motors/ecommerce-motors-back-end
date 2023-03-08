import * as bcrypt from "bcryptjs"
import { AppError } from "../../errors/appError"
import { IUserRequest } from "../../interfaces/user"
import { prisma } from "../../utils/prisma"

export const createUserService = async (data: IUserRequest) => {
    const { address, ...newData } = data

    const findUser = await prisma.user.findUnique({
        where: {
            email: data.email,
        },
    })

    if (findUser) {
        throw new AppError('E-mail já está cadastrado')
    }

    const newAddress = await prisma.address.create({ data: address } as any)

    const user = await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            cpf: data.cpf,
            phone: data.phone,
            birthDate: data.birthDate,
            description: data.description,
            typeAccount: data.typeAccount,
            isSaler: data.isSaler,
            password: bcrypt.hashSync(data.password, 10),
            createdAt: new Date(),
            updatedAt: new Date(),
            addressId: newAddress.id
        },
    })
    return { ...user, password: undefined }
}