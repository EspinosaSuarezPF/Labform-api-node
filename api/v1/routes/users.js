"use strict";

const router = require("express").Router();
const controller = require("./../controllers/users");


router.param("id", controller.params);

router.route("/")
    .get(controller.validateToken,controller.all)
    //.post(controller.validateToken,controller.post);
    .post(controller.post);

router.route("/login")
    .post(controller.login);

router.route("/logout")
    .post(controller.validateToken,controller.logout);

router.route("/:id")
    .put(controller.validateToken,controller.put)
    .delete(controller.validateToken,controller.delete);

module.exports = router;