const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
	role: {
		type: String,
		default: "visitor",
	},
	firstname: String,
	lastname: String,
	email: String,
	phone: Number,
	password: String,
	university: String,
	country: String,
	state: String,
	city: String,
	profileUrl: String,
	imagePath: String,
})

module.exports = mongoose.model("users", userSchema)
