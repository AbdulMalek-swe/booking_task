const express = require("express");
const cleaner = require("../controller/cleaner.controller");
const authorization = require("../middleware/authorization");
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router();

router
    .route("/cleaner")
    // .get(verifyToken,authorization('cleaner','admin'), cleaner.getCleaner)
    .post(verifyToken,authorization('cleaner','admin'), cleaner.postCleaner)



module.exports = router;