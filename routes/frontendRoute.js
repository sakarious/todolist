//Express router
const router = require("express").Router();
//import frontend controlleer
const frontendController = require("../controllers/frontendTodoController");
const user = require("../controllers/frontendUserController");

router.get("/", (req, res) => {
  frontendController.homepage(req, res);
});

router.get("/create", (req, res) => {
  frontendController.createTodo(req, res);
});

router.post("/process", (req, res) => {
  frontendController.processTodo(req, res);
});

router.get("/all", (req, res) => {
  frontendController.getAll(req, res);
});

router.get("/view/:uniqueId", (req, res) => {
  frontendController.getOne(req, res);
});

router.get("/update/:uniqueId", (req, res) => {
  frontendController.updateTodo(req, res);
});

router.post("/updateTodo/:uniqueId", (req, res) => {
  frontendController.processUpdateTodo(req, res);
});

router.get("/delete/:uniqueId", (req, res) => {
  frontendController.deleteOne(req, res);
});

router.post("/delete/:uniqueId", (req, res) => {
  frontendController.processDelete(req, res);
});

router.get("/done/:uniqueId", (req, res) => {
  frontendController.complete(req, res);
});

router.post("/done/:uniqueId", (req, res) => {
  frontendController.processComplete(req, res);
});

router.get("/completedtodos", (req, res) => {
  frontendController.getAllCompleted(req, res);
});

router.get("/viewcompleted/:uniqueId", (req, res) => {
  frontendController.getOneCompleted(req, res);
});

//USERS AUTH

router.get("/register", (req, res) => {
  user.register(req, res);
});

router.post("/registerUser", (req, res) => {
  user.processRegister(req, res);
});

module.exports = router;
