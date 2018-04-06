"use strict";

const router = require("express").Router();
const controller = require("./../controllers/tipoensayos");

router.route("/")
.get(controller.get)
.post(controller.post);
/*
.get()
.post()
.put()
.delete();
*/

router.route("/:id")
    .get()
    .put()
    .delete();
    
module.exports = router;