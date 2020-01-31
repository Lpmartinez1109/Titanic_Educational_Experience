SELECT * FROM titanic_db.train;

use titanic_db;
ALTER TABLE train
ADD COLUMN createdAt timestamp not null default CURRENT_TIMESTAMP;