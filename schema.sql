DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INT default 0,
    stock_quantity INT default 0,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("HD Monitor", "Electronics", 85, 50),
("Gold Earrings", "Jewelry", 75, 115),
("Purses", "Women's Fashion", 95, 25),
("Cutlery Set", "Kitchen & Dining", 25, 140),
("Yoga Mats", "Sports & Fitness", 30, 75),
("Cleansers", "Skin Care", 10, 150),
("Guitars", "Musical Instruments", 325, 5),
("Motion-Activated Cameras", "Home Security", 160, 100),
("Fruit Gift Baskets", "Best Sellers", 55, 115),
("Cat Trees", "Pet Supplies", 35, 10)