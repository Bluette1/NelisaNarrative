-- CREATE DATABASE nelisa;
-- CREATE USER bluette@localhost IDENTIFIED BY 'password';
-- GRANT ALL PRIVILEGES ON nelisa.* TO bluette@localhost;
-- FLUSH PRIVILEGES;
--
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
 -- ALTER TABLE sales DROP COLUMN price ;
 -- ALTER TABLE sales ADD quantity decimal(10);
 -- ALTER TABLE sales ADD week int;


-- create table purchases (
--     id int primary key auto_increment,
--         description char(100) not null,
--     price decimal(10,2),
--     product_id int,
--     foreign key (product_id) references products(id)
-- );

-- ALTER TABLE purchases DROP COLUMN price;
-- ALTER TABLE purchases ADD quantity int;
-- ALTER TABLE purchases ADD cost decimal(10,2);
-- ALTER TABLE purchases ADD total_cost decimal(10,2);
ALTER TABLE purchases ADD shop char(100);
