import { Express } from "express";
// import healthCheck from "./v1/healthCheck.route";
import userRoutes from "./v1/user.routes";


const initializeRoutes = (app: Express) => {
    console.log("inside route")
    // Routes
    app.use("/v1/user",userRoutes);    
};



export default initializeRoutes;