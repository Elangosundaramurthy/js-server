const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  order_id: String,
  customer_id: String,
  Name:String,
  order_date: Date,
  product_details: String,
  batch_no: String,
  quantity: Number,
  stock_availability: String,
  unavailable_quantity: Number,
  damaged_product: Boolean,
  eta_unavailable_stock: String,
  eta_damaged_stock: String,
  order_total: Number,
  payment_received: Number,
  order_status:{
    type:String,
    enum:['Order Confirm','Ready for Delivery','Out for Delivery','Deliverd',]
  },
  sales_person: String,
  location: String,
  delivery_date: Date,
  purchase_order:String,
  nature_of_order:String,
  billing_id:String,
  If_Referred:{
    type:String,
    enum:['Yes','No']
  },
  Brand:String,
  Referred_Customer_Name:String,
  Referred_Customer_ID:String,
  Final_Job_Link:String
}, { timestamps: true });
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;