"use strict";

const router = require("express").Router();
const controller = require("./../controllers/tipoensayos");

router.param("id", controller.params);

router.route("/")
.get(controller.validateToken,controller.all)
.post(controller.validateToken,controller.post);
/*
.get()
.post()
.put()
.delete();
*/

router.route("/:id")
    .get(controller.validateToken,controller.get)
    .put(controller.validateToken,controller.put)
    .delete(controller.validateToken,controller.delete);
    
module.exports = router;