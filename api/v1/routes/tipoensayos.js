"use strict";

const router = require("express").Router();
const controller = require("./../controllers/tipoensayos");

router.route("/")

.get()
.post(controller.validateToken,controller.post)
.put()
.delete();


router.route("/:id")
    .get()
    .put()
    .delete();
    
module.exports = router;