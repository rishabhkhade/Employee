const router = require('express').Router();
const employee = require("../controller/employee.controller")

router.get("/allEmployee", employee.getAllEmployee)
router.get("/:id", employee.getOneEmployee)
router.post("/add-employee", employee.addEmployee)
router.put("/update", employee.updateEmployee)
router.delete("/:id", employee.deleteEmployee)


module.exports = router;
