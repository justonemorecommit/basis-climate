/*
  Warnings:

  - You are about to drop the column `projectSponsorFirst_name` on the `project_submissions` table. All the data in the column will be lost.
  - Added the required column `projectSponsorFirstName` to the `project_submissions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "project_submissions" DROP COLUMN "projectSponsorFirst_name",
ADD COLUMN     "projectSponsorFirstName" VARCHAR(255) NOT NULL;
