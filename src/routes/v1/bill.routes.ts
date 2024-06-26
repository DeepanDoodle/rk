import  billController  from "../../controllers/bill.controller";
import { Authenticate } from "../../middleware/authentication";
import express from "express";

const billRoutes = express.Router();
import validator from "../../validators";

billRoutes.get("/supplierName",Authenticate.verifyToken,billController.supplierName);
billRoutes.get("/typeOfRawMaterials",billController.typeOfRawMaterials);
billRoutes.get("/currency",billController.currency);
billRoutes.post('/addqunatity',validator.bill.addQuantituValidation, billController.addQuantity)
billRoutes.put('/editQuantity/:_id',validator.bill.editQuantituValidation,billController.editQuantity)
billRoutes.delete('/deleteQuantity/:_id',billController.deleteQuantity)
billRoutes.get('/poNumber',validator.bill.poNumberValidation,billController.findPo)
export default billRoutes;
