CREATE DATABASE nelisa;
CREATE USER bluette@localhost IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON nelisa.* TO bluette@localhost;
FLUSH PRIVILEGES;

use nelisa;

create table categories(
    id int primary key auto_increment,
    description char(100) not null
);

create table products (
    id int primary key auto_increment,
    description char(100) not null,
    price decimal(10,2),
    category_id int,
    foreign key (category_id) references categories(id)
);
-- ALTER TABLE products DROP COLUMN price ;

create table sales (
    id int primary key auto_increment,
        description char(100) not null,
    price decimal(10,2),
    product_id int,
    foreign key (product_id) references products(id)
);

create table purchases (
    id int primary key auto_increment,
        description char(100) not null,
    price decimal(10,2),
    product_id int,
    foreign key (product_id) references products(id)
);
