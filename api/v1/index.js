"use strict";

const router = require("express").Router();
 
const usersRoutes = require("./routes/users");
const ensayosRoutes = require("./routes/ensayos");
const tipoensayosRoutes = require("./routes/tipoensayos");

router.use("/users", usersRoutes);
router.use("/ensayos", ensayosRoutes);
router.use("/tipoensayos", tipoensayosRoutes);

module.exports = router;
