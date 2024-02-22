-- CreateTable
CREATE TABLE "Lunch" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Lunch_name_key" ON "Lunch"("name");
