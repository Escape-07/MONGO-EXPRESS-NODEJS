const { MongoClient } = require("mongodb");
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url)

async function dbConnection() {
    let result = await client.connect()
    let db = result.db('E-comm')
    return db.collection('Product')
    // let response = await collection.find({}).toArray()
    // console.log(response)
}

module.exports = dbConnection;