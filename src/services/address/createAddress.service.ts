import { prisma } from "../../utils/prisma";
import {Address} from "../../interfaces/address/index"

export const addressCreateService =  async (addressData: Address) => {
    const newAddress = await prisma.address.create({
            data: addressData,
            include: {
                user: true,
            }
        });
    return newAddress
}