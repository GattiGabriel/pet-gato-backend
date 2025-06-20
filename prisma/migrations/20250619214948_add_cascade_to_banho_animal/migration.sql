-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Banho" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valorTotal" REAL NOT NULL,
    "data" DATETIME NOT NULL,
    "animalId" INTEGER NOT NULL,
    CONSTRAINT "Banho_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Banho" ("animalId", "data", "id", "valorTotal") SELECT "animalId", "data", "id", "valorTotal" FROM "Banho";
DROP TABLE "Banho";
ALTER TABLE "new_Banho" RENAME TO "Banho";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
