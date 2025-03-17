const dbConnection = require("./mongodb")

const deletData = async () => {
    let db = await dbConnection()
    let result = await db.deleteMany({ name: "not 5" })
    console.log(result)
    if (result.acknowledged) {
        console.log("record deleted")
    }
}

deletData()