# bAmazon | Amazon-like storefront: 
This is a CLI application that takes in orders from customers and depletes stock from the store's inventory.

## **Basic App Functionality**
* The app will prompt users with two messages.
* The first will prompt users to enter the `item_id` of the product they would like to buy.
* The second message will ask how many units of the product they would like to buy.
* Once the customer has placed the order, the application will check if bamazon store has enough of the product in stock to meet the customer's request.
* If not, the app should log a phrase like `insufficient quantity!`, and then prevent the order from going through.

### App Requirements
NPM Pkgs Installed | Uses
------------------ | ----
mysql | This is a node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed
inquirer | A collection of common interactive command line user interfaces
console.table | Adds console.table method for convenience

## **Running bamazon Application**

1. Running this application will first display the **customer's view** of _all items available_ for sale:
    >To run this application, type this in your Git Bash terminal `node bamazonCustomer.js` and press `enter`. Then follow the message prompts.
    >Troubleshooting: check that you are in the correct GitHub branch file path before running node in your terminal `youname ~/Desktop/Code/bamazon (master)`.
    ![Products Inventory](https://kyoukel.github.com/bamazon/screenshots/full_products_inventory.png)

* Notice that `~~item_id 7~~` had a `quantity of 0` and has been removed from the customer's view because this item is no longer available. 
    >Once an item's stock has been `depleted`, it will be `removed` from customer's view.
    ![Available Inventory](https://github.com/kyoukel/bamazon/screenshots/available_items.png)

2. Customer will be `prompted` with two questionsto make an item selection and enter the quantity they would like to buy. If customer makes an invalid entry, they will be notified and asked to make a valid selection:
    ![Insufficient Quantity](https://github.com/kyoukel/bamazon/screenshots/insufficient_quantity.png)

3. When customer makes a valid selection, their `order total` will be displayed below and item inventory will be updated and reflect new available quantity for the next order placed:
    
    >![Order Total](https://github.com/kyoukel/bamazon/screenshots/order_total.png)

    >![Inventory Updated](https://github.com/kyoukel/bamazon/screenshots/inventory_updated.png)





