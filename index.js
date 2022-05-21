import express from "express";
import cors from "cors";

import  providerRoute  from "./routes/provider";
import  clientRoute  from "./routes/client";
import  productRoute  from "./routes/product";
import  billRoute  from "./routes/bill";
import  purchaseRoute  from "./routes/purchase";

const app=express();
const PORT= process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/provider",providerRoute);
app.use("/client",clientRoute);
app.use("/product",productRoute);
app.use("/bill",billRoute);
app.use("/purchase",purchaseRoute);

app.listen(PORT, ()=>{
    console.log(`Server runnig on PORT: ${PORT}`);
});