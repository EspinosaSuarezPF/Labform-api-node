"use strict";

const router = require("express").Router();
 
const usersRoutes = require("./routes/users");
const ensayosRoutes = require("./routes/ensayos");
const tipoensayosRoutes = require("./routes/tipoensayos");
router.use("/users", usersRoutes);
router.use("/ensayos", usersRoutes);
router.use("/tipoensayos", usersRoutes);

module.exports = router;
