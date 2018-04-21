# bAmazon | Amazon-like storefront: 
This is a CLI application that takes in orders from customers and depletes stock from the store's inventory.

## Basic App Functionality
- [x] The app will prompt users with two messages.
- [x] The first will prompt users to enter the `item_id` of the product they would like to buy.
- [x] The second message will ask how many units of the product they would like to buy.
- [x] Once the customer has placed the order, the application will check if bamazon store has enough of the product in stock to meet the customer's request.
- [x] If not, the app should log a phrase like `insufficient quantity!`, and then prevent the order from going through.

## App Requirements
NPM Pkgs Installed | Uses
------------------ | ----
console.table | Adds console.table method for convenience
inquirer | A collection of common interactive command line user interfaces
mysql | This is a node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed

## **Running bamazon Application**

1. Running this application will first display the **customer's view** of _all items available_ for sale:
    **Before running this application:** double-check that you are in the `correct GitHub branch & file path` before running node in your terminal.

    >To run this application, type this in your GitBash terminal `node bamazonCustomer.js` and press `enter`. 
    >Then follow the message prompts.
    
    >![Products Inventory](https://github.com/kyoukel/bamazon/blob/master/screenshots/full_products_inventory.PNG)

* Notice that `~~item_id 7~~` had a `quantity of 0` and has been removed from the customer's view because this item is no longer available. 
    
    >Once an item's stock has been `depleted`, it will be `removed` from customer's view.
    
    >![Available Inventory](https://github.com/kyoukel/bamazon/blob/master/screenshots/available_items.PNG)

2. Customer will be `prompted` with two questions to make an item selection then enter the quantity they would like to buy. 
    
    >If customer makes an `invalid entry`, they will be prompted to make a valid selection:

    >![Insufficient Quantity](https://github.com/kyoukel/bamazon/blob/master/screenshots/insufficient_quantity.PNG)

3. When customer makes a valid selection, their `order total` will be displayed and item inventory will be updated and reflect new available stock.
    
    >![Order Total](https://github.com/kyoukel/bamazon/blob/master/screenshots/order_total.PNG)

    >![Inventory Updated](https://github.com/kyoukel/bamazon/blob/master/screenshots/inventory_updated.PNG)





