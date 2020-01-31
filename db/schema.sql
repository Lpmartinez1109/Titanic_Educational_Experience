create database titanic_db;
create table train(
id int auto_increment primary key,
name varchar(30)
);
SELECT * FROM titanic_db.train;
use titanic_db;
ALTER TABLE train;
ADD COLUMN createdAt timestamp not null default CURRENT_TIMESTAMP;

