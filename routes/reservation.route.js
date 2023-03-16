const express = require("express");
const reservation = require("../controller/reservation.controller");
const authorization = require("../middleware/authorization");
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router();
 
router
    .route("/reservation")
    .get(verifyToken, reservation.getReservation)
    .post(verifyToken, reservation.postReservation)

    router
    .route("/reservation/:id")
    .delete(verifyToken,reservation.cancelReservation)
module.exports = router;