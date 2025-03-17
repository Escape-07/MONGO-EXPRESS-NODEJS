const mongoose = require('mongoose')

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/E-comm")
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number
    })
    const ProductModel = mongoose.model('Product', ProductSchema)
    let data = new ProductModel({ name: 'digubha', price: 222 })
    let result = await data.save();
    console.log(result)
}
main()      