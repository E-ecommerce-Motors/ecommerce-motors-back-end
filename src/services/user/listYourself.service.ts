import { prisma } from "../../utils/prisma"

export const listYourselfService = async (id: number) => {


  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      address: true
    }
  })

  return user
}

