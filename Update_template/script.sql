use nelisa_database;

-- create table sales (
--     id int primary key auto_increment,
--     category_id int ,
--     description char(100) not null,
--     amount int
--
-- );

create table purchases (
    id int primary key auto_increment,
    category_id int ,
    description char(100) not null,
    amount int

);
