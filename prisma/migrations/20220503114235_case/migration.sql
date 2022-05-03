-- CreateTable
CREATE TABLE "cases" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "case_number" TEXT NOT NULL,
    "agent" TEXT NOT NULL,
    "problem_description" TEXT NOT NULL,
    "problem_solution" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
