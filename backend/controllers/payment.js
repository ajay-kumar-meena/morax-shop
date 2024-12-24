import { razorpayInstance } from "../app.js";
import crypto from "crypto";
import { Payment } from "../models/payment.js";




export const getKey = (req, res) =>{

  if(!process.env.RAZORPAY_API_KEY){
      return res.status(500).json({ message: "Razorpay API Key not found" });
  }
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
}

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await razorpayInstance.orders.create(options);

  res.status(200).json({
    success: true,
    order,
  });
}; 

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");
  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });
    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
      res.redirect( `http://localhost:3000/paymentfailed`)
  }
};
