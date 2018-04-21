require("console.table");
const inquirer = require("inquirer");

const conn = require("mysql").createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db",
})

const query=(statement) => {
    return new Promise((resolve, reject) => {
        conn.query(statement, (err, res) => err ? reject(err) : resolve(res))
    })
}

const questions = {
        order: [{
            type: "prompt",
            name: "item_id",
            message: "Please enter which item_id you would like to buy.",
            validate: (choice) => {
                return availableProducts()
                    .then(data=>data.map(element=>element.item_id))
                    .then(data=> {
                        if(data.includes(parseInt(choice))) return true;
                        return "Please make a valid selection."
                })
            }
        },
        {
            type: "prompt",
            name: "stock_quantity",
            message: "Please enter how many you would like to buy.",
            validate: (choice) => {
                if(Number.isInteger(parseInt(choice))) return true;
                return "Please make a valid selection."
            }
        },
    ]
}

const availableProducts = () => {
    const statement = 'select * from products where stock_quantity > 0';
    return query(statement)
}

const processOrder = (order)=>{
    const statement = `select * from products where item_id = ${order.item_id} and stock_quantity >= ${order.stock_quantity}`;
    return query(statement)
        .then(items=>{
            if(items.length === 0) return 'Insufficient quantity! Please enter a valid quantity.'
            return updateDB(order)
        })
}

const updateDB = (order) => {
    const statement = `select * from products where item_id = ${order.item_id}`;
    return query(statement)
        .then(items=> {
            const newStock = items[0].stock_quantity - order.stock_quantity
            const statement = `update products set stock_quantity = ${newStock} where item_id = ${order.item_id}`;
            return query(statement)
                .then(()=>{
                    const price = (order.stock_quantity * items[0].price).toFixed(2)
                    return `Your order total is $${price}`
                })
        })
}

availableProducts()
    .then(products => console.table(products))
    .then(() => inquirer.prompt(questions.order))
    .then(order => processOrder(order))
    .then(orderResult => console.log(orderResult))
    .then(() => conn.end())