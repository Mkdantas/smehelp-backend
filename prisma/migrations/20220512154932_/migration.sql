-- CreateTable
CREATE TABLE "cases" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "case_number" TEXT NOT NULL,
    "agent" TEXT NOT NULL,
    "problem_description" TEXT NOT NULL,
    "problem_solution" TEXT NOT NULL DEFAULT '',
    "status" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "on_call" BOOLEAN NOT NULL DEFAULT false,
    "sme" TEXT NOT NULL DEFAULT '',
    "on_close_status" TEXT NOT NULL DEFAULT '',
    "type" TEXT NOT NULL
);
