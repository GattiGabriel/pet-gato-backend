-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BanhoServico" (
    "banhoId" INTEGER NOT NULL,
    "servicoId" INTEGER NOT NULL,

    PRIMARY KEY ("banhoId", "servicoId"),
    CONSTRAINT "BanhoServico_banhoId_fkey" FOREIGN KEY ("banhoId") REFERENCES "Banho" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "BanhoServico_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "Servico" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BanhoServico" ("banhoId", "servicoId") SELECT "banhoId", "servicoId" FROM "BanhoServico";
DROP TABLE "BanhoServico";
ALTER TABLE "new_BanhoServico" RENAME TO "BanhoServico";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
