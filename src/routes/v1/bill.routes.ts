import { Authenticate } from "../../middleware/authentication";
import express from "express";

const billRoutes = express.Router();
import billController from "../../controllers/bill.controller";
import validator from "../../validators";

// billRoutes.post("/add_bill",billController.add);
billRoutes.post('/addqunatity',validator.bill.addQuantituValidation, billController.addQuantity)


export default billRoutes;
