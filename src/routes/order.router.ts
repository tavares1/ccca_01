import express, { Router } from "express";
import {fetchOrder, newProductToOrder, createNewOrder, getTotalValueFromOrder} from "../controllers/order.controller";

export default class OrderRoutes {

    public router: Router

    constructor() {
        this.router = express.Router()
        this.registerRoutes()
    }

    registerRoutes() {
        this.router.get("/order/:order_id", fetchOrder)
        this.router.get("/order/:order_id/totalValue", getTotalValueFromOrder)
        this.router.post("/order", createNewOrder)
        this.router.put("/order/:order_id", newProductToOrder)
    }
}
