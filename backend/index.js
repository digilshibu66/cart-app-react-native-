const mongoose=require("mongoose")
const express=require("express")
const MongoClient=require("mongodb").MongoClient
const app=express()
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.get("/",(req,res)=>{
    //console.log(res.data);
    res.send({status:"started"})
})

const CartItem = mongoose.model('CartItem', {
    id: String,
    name: String,
    price: Number,
    oldprice:Number,
    image:String,

  },'products');

  app.get('/products', async (req, res) => {
   
   try {
      const cartItems = await CartItem.find();
      res.json(cartItems);
     // console.log(res);
    } catch (error) {
      console.error('Error fetching cart items:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  const deleteCartItem = async (req, res) => {
    console.log(req.params.id)
    try {
      await CartItem.findByIdAndDelete(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  app.delete('/products/:id',deleteCartItem);
app.listen(PORT,()=>{
    console.log("nodejs started");
    })

const url="mongodb+srv://digilshibu99:digil@cluster0.s6qomvv.mongodb.net/Product_db"
const params={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
mongoose.connect(url,params).then(()=>
{
    console.info("connected to db")
})
.catch((e)=>{
    console.log("error:",e)
})