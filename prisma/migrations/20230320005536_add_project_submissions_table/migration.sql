-- CreateTable
CREATE TABLE "project_submissions" (
    "id" SERIAL NOT NULL,
    "asset_types" JSON NOT NULL,
    "cost_to_construct" DECIMAL NOT NULL,
    "email_address" VARCHAR(255) NOT NULL,
    "estimated_completion_date" DATE NOT NULL,
    "fair_market_value" DECIMAL NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "project_sponsor_first_name" VARCHAR(255) NOT NULL,
    "project_sponsor_last_name" VARCHAR(255) NOT NULL,
    "formId" INTEGER NOT NULL,
    "submissionId" INTEGER NOT NULL,

    CONSTRAINT "project_submissions_pkey" PRIMARY KEY ("id")
);
