-- CreateTable
CREATE TABLE "visits" (
    "id" TEXT NOT NULL,
    "visitor_id" TEXT NOT NULL,
    "created_ad" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "views" INTEGER NOT NULL,
    "advert_id" TEXT,

    CONSTRAINT "visits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "visitor_id" TEXT NOT NULL,
    "contacts" INTEGER NOT NULL,
    "created_ad" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "advert_id" TEXT,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "visits_visitor_id_key" ON "visits"("visitor_id");

-- CreateIndex
CREATE UNIQUE INDEX "visits_advert_id_created_ad_key" ON "visits"("advert_id", "created_ad");

-- CreateIndex
CREATE UNIQUE INDEX "contacts_visitor_id_key" ON "contacts"("visitor_id");

-- AddForeignKey
ALTER TABLE "visits" ADD CONSTRAINT "visits_advert_id_fkey" FOREIGN KEY ("advert_id") REFERENCES "adverts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_advert_id_fkey" FOREIGN KEY ("advert_id") REFERENCES "adverts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
