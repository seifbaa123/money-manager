-- CreateTable
CREATE TABLE "Users" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Collections" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "value" BIGINT NOT NULL,
    "username" TEXT NOT NULL,
    CONSTRAINT "Collections_username_fkey" FOREIGN KEY ("username") REFERENCES "Users" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Transactions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" BIGINT NOT NULL,
    "collectionName" TEXT NOT NULL,
    CONSTRAINT "Transactions_collectionName_fkey" FOREIGN KEY ("collectionName") REFERENCES "Collections" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
