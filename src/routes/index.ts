import { Express } from "express";
// import healthCheck from "./v1/healthCheck.route";
import userRoutes from "./v1/user.routes";
import billRoutes from "./v1/bill.routes";


const initializeRoutes = (app: Express) => {
    console.log("inside route")
    // Routes
    app.use("/v1/user",userRoutes);    
    app.use("/v1/bill",billRoutes);
};



export default initializeRoutes;