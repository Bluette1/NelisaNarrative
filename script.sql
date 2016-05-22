-- CREATE DATABASE nelisa;
-- CREATE USER bluette@localhost IDENTIFIED BY 'password';
-- GRANT ALL PRIVILEGES ON nelisa.* TO bluette@localhost;
-- FLUSH PRIVILEGES;

use nelisa;
--
-- create table categories(
--     id int primary key auto_increment,
--     description char(100) not null
-- );
--
-- create table products (
--     id int primary key auto_increment,
--     description char(100) not null,
--     price decimal(10,2),
--     category char(100),
--     category_id int,
--     foreign key (category_id) references categories(id)
-- );
--
--
-- create table sales (
--     id int primary key auto_increment,
--     description char(100) not null,
--     price decimal(10,2),
--     product_id int,
--     foreign key (product_id) references products(id)
-- );
--
--  ALTER TABLE sales DROP COLUMN price ;
--  ALTER TABLE sales ADD quantity decimal(10);
--  ALTER TABLE sales ADD week int;
--  ALTER TABLE sales ADD date char(100);
--  ALTER TABLE sales ADD day char(100) not null;
--
--
-- create table purchases (
--     id int primary key auto_increment,
--     description char(100) not null,
--     quantity int,
--     cost decimal(10,2),
--     total_cost decimal(10,2),
--     shop char(100),
--     date char(100),
--     product_id int,
--     foreign key (product_id) references products(id)
-- );




-- UPDATE products AS p
-- INNER JOIN categories AS c
-- ON p.category = c.description
-- SET p.category_id = c.id;
--
--
-- UPDATE purchases AS p
-- INNER JOIN products AS pr
-- ON p.description = pr.description
-- SET p.product_id = pr.id;
--
-- UPDATE sales AS s
-- INNER JOIN products AS pr
-- ON s.description = pr.description
-- SET s.product_id = pr.id;

-- ALTER TABLE products DROP COLUMN category;
-- ALTER TABLE purchases DROP COLUMN description;
-- ALTER TABLE sales DROP COLUMN description;
-- UPDATE sales SET date = REPLACE(date, '-', ' ');
-- UPDATE purchases SET date = REPLACE(date, '-', ' ');
-- ALTER TABLE sales ALTER COLUMN date date;
-- ALTER TABLE sales ALTER COLUMN date date ;
-- ALTER TABLE sales CHANGE date Date date;
-- ALTER TABLE sales CHANGE date Date date DATE_FORMAT('%d %b');
UPDATE TABLE sales SET date = REPLACE(date, DATE_FORMAT('%d %b'));
