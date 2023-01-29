import express, { Router } from "express";
import OrderRoutes from "./routes/order.router";

const app = express();
app.use(express.json());

const orderRoutes = new OrderRoutes();
app.use(orderRoutes.router);

app.listen('3000', () => {
    console.log('Application listening at http:localhost:3000');
});
