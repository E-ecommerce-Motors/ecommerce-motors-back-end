-- CreateEnum
CREATE TYPE "type_announcement_options" AS ENUM ('sale', 'auction');

-- CreateEnum
CREATE TYPE "type_vehicle_options" AS ENUM ('car', 'motorcycle');

-- CreateTable
CREATE TABLE "Announcement" (
    "id" SERIAL NOT NULL,
    "typeAnnouncement" "type_announcement_options" NOT NULL,
    "title" TEXT NOT NULL,
    "year" TIMESTAMP(3) NOT NULL,
    "mileage" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "typeVehicle" "type_vehicle_options" NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Intermediary" (
    "id" SERIAL NOT NULL,
    "announcementId" INTEGER NOT NULL,
    "commentId" INTEGER NOT NULL,

    CONSTRAINT "Intermediary_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Intermediary" ADD CONSTRAINT "Intermediary_announcementId_fkey" FOREIGN KEY ("announcementId") REFERENCES "Announcement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Intermediary" ADD CONSTRAINT "Intermediary_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
