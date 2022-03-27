//mongoose
const mongoose = require('mongoose')

//mongodb
const dbUrl = 'mongodb://localhost:27017/productDB'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console(err))

//Schema
let productSchema = mongoose.Schema({
    commandType:String,
    binary:String
})

//model let name = mongoose.model('name_of_collection',StructureSchema)
let Product = mongoose.model('products',productSchema)

//expert model
module.exports = Product

//save product
module.exports.saveProduct = function(model,data) {
    model.save(data)
}