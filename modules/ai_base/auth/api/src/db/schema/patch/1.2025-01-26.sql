ALTER TABLE users ADD COLUMN IF NOT EXISTS "lang_id" int not null DEFAULT 0;
ALTER TABLE users ALTER COLUMN password SET not null;
