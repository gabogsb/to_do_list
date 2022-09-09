const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

routes.get("/", TaskController.getAllTasks);
routes.get("/getByID/:id/:method", TaskController.getById);
routes.get("/deleteOne/:id", TaskController.deleteOneTask);

routes.post("/create", TaskController.createTask);
routes.post("/updateOne/:id", TaskController.updateOneTask);

module.exports = routes;
