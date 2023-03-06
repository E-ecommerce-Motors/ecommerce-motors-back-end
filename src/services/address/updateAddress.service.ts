import { prisma } from "../../utils/prisma";
import {Address} from "../../interfaces/address/index"

export const addressUpdateService = async (id: number, addressData: Address) => {
        const updateAddress = prisma.address.update({
                where: { id },
                data: addressData,
        });

        return updateAddress;
}