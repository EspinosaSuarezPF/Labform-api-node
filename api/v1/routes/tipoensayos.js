"use strict";

const router = require("express").Router();
const controller = require("./../controllers/tiposensayos");

router.route("/")
.get()
.post();
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