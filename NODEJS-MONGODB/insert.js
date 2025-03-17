const dbConnection = require('./mongodb')

const insert = async () => {
    const db = await dbConnection()

    const result = await db.insertMany([{ name: 'not 5', brand: 'vivo', price: 220 }, { name: 'not 2', brand: 'ddvivo', price: 220 }, { name: 'not 3', brand: 'vissvo', price: 220 }])

}

insert()