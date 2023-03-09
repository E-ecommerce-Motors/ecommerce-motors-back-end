import { prisma } from "../../utils/prisma";
import { IAddress } from "../../interfaces/address/index"
import { AppError } from "../../errors/appError";

export const addressUpdateService = async (id: number, data: IAddress) => {
        const findAddress = await prisma.address.findUnique({
                where: {
                        id
                },
        })

        if (!findAddress) {
                throw new AppError("Endereço não encontrado", 404)
        }

        const updateAddress = prisma.address.update({
                where: { id },
                data,
        });

        return updateAddress;
}