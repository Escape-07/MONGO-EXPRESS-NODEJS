const dbConnection = require("./mongodb")

const updateData = async () => {
    let data = await dbConnection()
    let result = data.updateOne({ name: "not 5" }, { $set: { name: "neno 67777" } })

}

updateData()