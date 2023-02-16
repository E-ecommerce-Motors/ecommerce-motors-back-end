-- CreateTable
CREATE TABLE "AnnouncementImages" (
    "id" SERIAL NOT NULL,
    "coverImage" TEXT NOT NULL,
    "imageGallery" TEXT[],
    "announcementId" INTEGER NOT NULL,

    CONSTRAINT "AnnouncementImages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AnnouncementImages" ADD CONSTRAINT "AnnouncementImages_announcementId_fkey" FOREIGN KEY ("announcementId") REFERENCES "Announcement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
