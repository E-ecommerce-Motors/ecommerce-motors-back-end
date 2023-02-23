-- DropForeignKey
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_userId_fkey";

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
