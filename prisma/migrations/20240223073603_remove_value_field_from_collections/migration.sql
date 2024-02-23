/*
  Warnings:

  - You are about to drop the column `value` on the `Collections` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Collections" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    CONSTRAINT "Collections_username_fkey" FOREIGN KEY ("username") REFERENCES "Users" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Collections" ("name", "username") SELECT "name", "username" FROM "Collections";
DROP TABLE "Collections";
ALTER TABLE "new_Collections" RENAME TO "Collections";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
