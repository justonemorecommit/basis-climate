/*
  Warnings:

  - You are about to drop the column `asset_types` on the `project_submissions` table. All the data in the column will be lost.
  - You are about to drop the column `cost_to_construct` on the `project_submissions` table. All the data in the column will be lost.
  - You are about to drop the column `email_address` on the `project_submissions` table. All the data in the column will be lost.
  - You are about to drop the column `estimated_completion_date` on the `project_submissions` table. All the data in the column will be lost.
  - You are about to drop the column `fair_market_value` on the `project_submissions` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `project_submissions` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `project_submissions` table. All the data in the column will be lost.
  - You are about to drop the column `project_sponsor_first_name` on the `project_submissions` table. All the data in the column will be lost.
  - You are about to drop the column `project_sponsor_last_name` on the `project_submissions` table. All the data in the column will be lost.
  - Added the required column `assetTypes` to the `project_submissions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `costToConstruct` to the `project_submissions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailAddress` to the `project_submissions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estimatedCompletionDate` to the `project_submissions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fairMarketValue` to the `project_submissions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `project_submissions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `project_submissions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectSponsorFirst_name` to the `project_submissions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectSponsorLastName` to the `project_submissions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "project_submissions" DROP COLUMN "asset_types",
DROP COLUMN "cost_to_construct",
DROP COLUMN "email_address",
DROP COLUMN "estimated_completion_date",
DROP COLUMN "fair_market_value",
DROP COLUMN "first_name",
DROP COLUMN "last_name",
DROP COLUMN "project_sponsor_first_name",
DROP COLUMN "project_sponsor_last_name",
ADD COLUMN     "assetTypes" JSON NOT NULL,
ADD COLUMN     "costToConstruct" DECIMAL NOT NULL,
ADD COLUMN     "emailAddress" VARCHAR(255) NOT NULL,
ADD COLUMN     "estimatedCompletionDate" DATE NOT NULL,
ADD COLUMN     "fairMarketValue" DECIMAL NOT NULL,
ADD COLUMN     "firstName" VARCHAR(255) NOT NULL,
ADD COLUMN     "lastName" VARCHAR(255) NOT NULL,
ADD COLUMN     "projectSponsorFirst_name" VARCHAR(255) NOT NULL,
ADD COLUMN     "projectSponsorLastName" VARCHAR(255) NOT NULL;
