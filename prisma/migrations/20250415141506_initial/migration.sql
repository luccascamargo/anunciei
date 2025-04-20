-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'INACTIVE', 'REQUESTED');

-- CreateEnum
CREATE TYPE "Plan" AS ENUM ('FREE', 'BASIC', 'PRO');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('CARS', 'TRUCKS', 'MOTORCYCLES');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "stripe_id" TEXT,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "active" BOOLEAN NOT NULL,
    "plan" "Plan" NOT NULL DEFAULT 'FREE',
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "subscripton_id" TEXT,
    "cycle" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "stripe_product_id" TEXT,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_ad" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cancel_at_period_end" BOOLEAN NOT NULL,
    "current_period_start" TIMESTAMP(3) NOT NULL,
    "current_period_end" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "adverts" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "year_model" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "formatted_city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "formatted_state" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "doors" TEXT NOT NULL,
    "mileage" INTEGER NOT NULL,
    "description" TEXT,
    "formatted_description" TEXT,
    "plate" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "status" "Status" NOT NULL DEFAULT 'REQUESTED',
    "slug" TEXT NOT NULL,
    "emphasis" BOOLEAN,
    "user_id" TEXT NOT NULL,
    "model_id" TEXT NOT NULL,
    "board_id" TEXT,

    CONSTRAINT "adverts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brands" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "models" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "brand_id" TEXT,

    CONSTRAINT "models_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "optional" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "optional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photos" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "advert_id" TEXT NOT NULL,

    CONSTRAINT "photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AdvertsToOptional" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AdvertsToOptional_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_stripe_id_key" ON "users"("stripe_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "subscriptions_id_key" ON "subscriptions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "subscriptions_subscripton_id_key" ON "subscriptions"("subscripton_id");

-- CreateIndex
CREATE UNIQUE INDEX "adverts_slug_key" ON "adverts"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "models_name_key" ON "models"("name");

-- CreateIndex
CREATE UNIQUE INDEX "optional_id_key" ON "optional"("id");

-- CreateIndex
CREATE UNIQUE INDEX "optional_name_key" ON "optional"("name");

-- CreateIndex
CREATE INDEX "_AdvertsToOptional_B_index" ON "_AdvertsToOptional"("B");

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adverts" ADD CONSTRAINT "adverts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adverts" ADD CONSTRAINT "adverts_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "models"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adverts" ADD CONSTRAINT "adverts_board_id_fkey" FOREIGN KEY ("board_id") REFERENCES "brands"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "models" ADD CONSTRAINT "models_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photos" ADD CONSTRAINT "photos_advert_id_fkey" FOREIGN KEY ("advert_id") REFERENCES "adverts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdvertsToOptional" ADD CONSTRAINT "_AdvertsToOptional_A_fkey" FOREIGN KEY ("A") REFERENCES "adverts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdvertsToOptional" ADD CONSTRAINT "_AdvertsToOptional_B_fkey" FOREIGN KEY ("B") REFERENCES "optional"("id") ON DELETE CASCADE ON UPDATE CASCADE;
