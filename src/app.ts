import express from "express";
import OrderRoutes from "./routes/order.router";

const app = express();
app.use(express.json());

const orderRoutes = new OrderRoutes();
app.use(orderRoutes.router);

const server = app.listen('3000');

export {app,server};
