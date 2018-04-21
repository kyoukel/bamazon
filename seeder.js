const fs = require('fs');

const conn = require("mysql").createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",

})

const schemaPath = 'schema.sql';
const dataPath = 'products.csv';

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

const formatSchemaOutput = (path) => {
    return readFile(schemaPath)
        .then(data => data.split(";"))
        .then(data => data.splice(0, data.length - 1))
}

const formatDataOutput = (path) => {
    return readFile(dataPath)
        .then(data => data.split("\n"))
        .then(data => data.map(e => e.split(",")))
        .then(data => data.map(e => {
            e[0] = parseInt(e[0])
            e[3] = parseFloat(e[3])
            e[4] = parseInt(e[4])
            return JSON.stringify(e).replace(/[\[\]]/g, "")
        }))
        .then(data => data.map(ele => `insert into products () values (${ele})`))
}

const query = (statement) => {
    conn.query(statement, (err, res) => {
        if (err) throw err
    })
}

Promise.all([formatSchemaOutput(schemaPath), formatDataOutput(dataPath)])
    .then(data => [...data[0], ...data[1]])
    .then(data => data.forEach(e => query(e)))
    .then(() => conn.end())
    .catch(err => console.log(err))