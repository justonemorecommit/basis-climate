-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "projectName" VARCHAR(191) NOT NULL,
    "owner" VARCHAR(191) NOT NULL,
    "fmv" DECIMAL NOT NULL,
    "completionDate" DATE NOT NULL,
    "type" VARCHAR(191) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
