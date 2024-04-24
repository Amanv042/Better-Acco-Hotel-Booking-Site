const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
	},

	reviewDate: String,
	review: String,
	rating: String,
	reviewOnHotel: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "hotels",
	},
})

module.exports = mongoose.model("reviews", reviewSchema)
