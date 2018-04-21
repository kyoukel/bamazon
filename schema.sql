DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
    item_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(5,2) default 0.00,
    stock_quantity INT NOT NULL default 0
);