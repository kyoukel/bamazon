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
                        return "invalid choice"
                })
            }
        },
        {
            type: "prompt",
            name: "stock_quanitity",
            message: "Please enter how many of these you would like to buy.",
            validate: (choice) => {
                if(Number.isInteger(parseInt(choice))) return true;
                return "invalid choice"
            }
        },
    ]
}

const availableProducts = () => {
    const statement = 'select * from products where stock_quantity >0';
    return query(statement)
}

availableProducts()
    .then(data => console.table(data))
    .then(() => inquirer.prompt(questions.order))
    .then(() => conn.end())