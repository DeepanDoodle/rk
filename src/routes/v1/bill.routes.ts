import  billController  from "../../controllers/bill.controller";
import { Authenticate } from "../../middleware/authentication";
import express from "express";

const billRoutes = express.Router();
billRoutes.get("/supplierName",Authenticate.verifyToken,billController.supplierName);
billRoutes.get("/typeOfRawMaterials",billController.typeOfRawMaterials);
billRoutes.get("/currency",billController.currency);
export default billRoutes;
