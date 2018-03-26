"use strict";

const router = require("express").Router();
 
const usersRoutes = require("./routes/users");
const messagesRoutes = require("./routes/messages");
router.use("/users", usersRoutes);
router.use("/messages",messagesRoutes);

module.exports = router;