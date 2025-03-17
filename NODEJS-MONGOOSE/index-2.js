const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/E-comm");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
});

const SaveInDb = async () => {
    const Product = mongoose.model("Product", ProductSchema);
    let data = new Product({ name: "captadddddin", price: 1000, brand: "xya" });
    const result = await data.save();
    console.log(result);
};
// SaveInDb()

const UpdateInDb = async () => {
    const Product = mongoose.model("Product", ProductSchema);
    let data = await Product.updateOne(
        { name: "captadddddin" },
        { $set: { name: "milan" } }
    );
    console.log(data)
};
// UpdateInDb()

const deleteInDb = async () => {
    const Product = mongoose.model("Product", ProductSchema);
    let data = await Product.deleteOne({ name: "milan" })
}
// deleteInDb()

const findInDb = async () => {
    const Product = mongoose.model("Product", ProductSchema);
    let data = await Product.find({ name: "captadddddin" })
    console.log(data)
}
findInDb()