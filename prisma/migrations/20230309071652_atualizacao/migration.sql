-- DropForeignKey
ALTER TABLE "AnnouncementImages" DROP CONSTRAINT "AnnouncementImages_announcementId_fkey";

-- DropForeignKey
ALTER TABLE "Intermediary" DROP CONSTRAINT "Intermediary_announcementId_fkey";

-- DropForeignKey
ALTER TABLE "Intermediary" DROP CONSTRAINT "Intermediary_commentId_fkey";

-- AddForeignKey
ALTER TABLE "Intermediary" ADD CONSTRAINT "Intermediary_announcementId_fkey" FOREIGN KEY ("announcementId") REFERENCES "Announcement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Intermediary" ADD CONSTRAINT "Intermediary_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnnouncementImages" ADD CONSTRAINT "AnnouncementImages_announcementId_fkey" FOREIGN KEY ("announcementId") REFERENCES "Announcement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
