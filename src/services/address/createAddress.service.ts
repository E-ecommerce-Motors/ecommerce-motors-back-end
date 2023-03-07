import { prisma } from "../../utils/prisma";
import {Address} from "../../interfaces/address/index"

export const addressCreateService =  async (data: Address, userId: number) => {
    const newAddress = await prisma.address.create({
            data: {
                ...data,
                userId,
            }
        });
    return newAddress
}