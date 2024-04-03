const swaggerAutogen = require("swagger-autogen")();
const outputFile = "./src/swagger_output.json";
const endpointsFiles = ["./src/routes/index.ts"]; //'./src/routes/v1/taskRoutes.ts' './src/routes/v1/healthCheck.route.ts',

const doc = {
  info: {
    version: "1.0.0",
    title: "RK Industries Vendor & Store Service (Web App)",
    description: "This documentation will have list of API using by Vendor & Store Service",
  },
  host: "localhost:8000",
  basePath: "/v1",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "HealthCheck",
      description: "Server is running or not",
    },
  ],
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header", // can be "header", "query" or "cookie"
      name: "Authorization", // name of the header, query parameter or cookie
      description: "any description...",
    },
  },
  definitions: {

  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
