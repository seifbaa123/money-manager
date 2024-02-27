/*
  Warnings:

  - Added the required column `date` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transactions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "collectionName" TEXT NOT NULL,
    CONSTRAINT "Transactions_collectionName_fkey" FOREIGN KEY ("collectionName") REFERENCES "Collections" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Transactions" ("collectionName", "id", "value") SELECT "collectionName", "id", "value" FROM "Transactions";
DROP TABLE "Transactions";
ALTER TABLE "new_Transactions" RENAME TO "Transactions";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
