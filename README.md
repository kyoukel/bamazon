# bAmazon | Amazon-like storefront: 
This is a CLI application that takes in orders from customers and depletes stock from the store's inventory.

## Basic App Functionality
- [x] The app will prompt users/customers with two messages.
- [x] The first message will prompt customers to enter the `item_id` of the product they would like to buy.
- [x] The second message will ask how many units of the product they would like to buy.
- [x] Once the customer has placed their order, the application will check if bamazon store has enough of the product in stock to meet the customer's request.
- [x] If not, the app will log a phrase like `insufficient quantity!`, and then prevent their order from going through.

## App Requirements
NPM Pkgs Installed | Package Uses
------------------ | ------------
console.table | Adds console.table method for convenience
inquirer | A collection of common interactive command line user interfaces
mysql | This is a node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed

## **Running bamazon Application**

1. To see bamazon's full product inventory, you will need to type `mysql -u root` or `mysql -u root -p` to access mysql in GitBash/Terminal.
    
    >Next, type the following commands in this order:
    * 1. show databases;
    * 2. use bamazon_db;
    * 3. show tables;
    * 4. select * from products;
    
    ![Products Inventory](https://github.com/kyoukel/bamazon/blob/master/screenshots/full_products_inventory.PNG)

2. To run this application, type this in your GitBash/Terminal `node bamazonCustomer.js` and press `enter`.
    
    >* Once an item's stock has been **_depleted_**, it will be _(~~removed~~)_ from the customer's view. You should see the products table displayed with available items like you see below:
    
    >![Available Inventory](https://github.com/kyoukel/bamazon/blob/master/screenshots/available_items.PNG)

    * Notice that (~~item_id 7~~) had a quantity of 0 and has been `removed from the customer's view` because this item is no longer available.

2. Customer will be _**prompted**_ with two questions to make an item selection then enter the quantity they would like to buy. 
    
    >If customer makes an `invalid entry`, they will be prompted to make a valid selection:

    >![Insufficient Quantity](https://github.com/kyoukel/bamazon/blob/master/screenshots/insufficient_quantity.PNG)

3. When customer makes a valid selection, their `order total` will be displayed and bamazon inventory will be updated and reflect new available stock.
    
![Order Total](https://github.com/kyoukel/bamazon/blob/master/screenshots/order_total.PNG)

>![Inventory Updated](https://github.com/kyoukel/bamazon/blob/master/screenshots/inventory_updated.PNG)





