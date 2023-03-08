import { prisma } from "../../utils/prisma";
import {IAddress} from "../../interfaces/address/index"

export const addressUpdateService = async (id: number, data: IAddress) => {
        const updateAddress = prisma.address.update({
                where: { id },
                data,
        });

        return updateAddress;
}