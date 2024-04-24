const express = require("express")
const router = express.Router()

// importing functions
const {
	signup,
	login,
	userProfile,
	updateUser,
	hotelListing,
	hotelData,
	currentHotelData,
	reviews,
	postReview,
} = require("../controllers/controllers")

// Defining Routes
router.route("/signup").post(signup)
router.route("/login").post(login)
router.route("/user").post(userProfile)
router.route("/update-user/:id").put(updateUser)
router.route("/add-listing").post(hotelListing)
router.route("/hotelData").get(hotelData)
router.route("/hotel/:id").get(currentHotelData)
router.route("/reviews").get(reviews)
router.route("/post-review/:userID/:hotelID").post(postReview)

// Exporting Routes
module.exports = router
