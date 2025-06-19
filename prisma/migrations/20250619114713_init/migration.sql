-- CreateTable
CREATE TABLE "Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "email" TEXT,
    "telefone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "porte" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "observacao" TEXT NOT NULL,
    "clienteId" INTEGER NOT NULL,
    CONSTRAINT "Animal_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Banho" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valorTotal" REAL NOT NULL,
    "data" DATETIME NOT NULL,
    "animalId" INTEGER NOT NULL,
    CONSTRAINT "Banho_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Servico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Relatorio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataCriacao" DATETIME NOT NULL,
    "documento" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "BanhoServico" (
    "banhoId" INTEGER NOT NULL,
    "servicoId" INTEGER NOT NULL,

    PRIMARY KEY ("banhoId", "servicoId"),
    CONSTRAINT "BanhoServico_banhoId_fkey" FOREIGN KEY ("banhoId") REFERENCES "Banho" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BanhoServico_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "Servico" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
