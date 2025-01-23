CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "email" varchar,
  "username" varchar,
  "password" varchar,
  "bio" varchar,
  "image" varchar,
  "stamp" timestamptz NOT NULL DEFAULT NOW(),
  "change" timestamptz NOT NULL DEFAULT NOW()
);
