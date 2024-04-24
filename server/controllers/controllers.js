require("dotenv").config()
const Hotel = require("../schemas/hotel")
const User = require("../schemas/user")
// const Review = require("../db/reviews")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const fs = require("fs")
//this is for mail service
const nodemailer = require("nodemailer")
const Review = require("../schemas/review")
//random jwt token to validate user
const JWT_SECRET = process.env.JWT_SECRET

const cloudinary = require("cloudinary").v2 //this is for image upload to cloud service by cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET,
})

// user signup

const signup = async (req, res) => {
	try {
		const { data } = req.body
		const formData = JSON.parse(data)
		const { email } = formData
		const encryptedPassword = bcrypt.hashSync(formData.password)
		const formBody = { ...formData, password: encryptedPassword }
		const isUser = await User.findOne({ email })
		if (isUser) {
			throw new Error("user exist")
		}
		let user = new User(formBody)
		await user.save()
		return res.send({ status: "Registration Complete" })
	} catch (error) {
		res.send({ error: error.message })
	}
}

// user login
const login = async (req, res) => {
	const { data } = req.body
	const formData = JSON.parse(data)
	const { email, password } = formData

	try {
		const user = await User.findOne({ email })
		if (!user) {
			throw new Error("userNotFound")
		}

		if (await bcrypt.compare(password, user.password)) {
			const token = jwt.sign({ email: user.email }, JWT_SECRET)

			if (res.status(201)) {
				return res.send({ status: "loginSuccess", token })
			} else {
				throw new Error("loginError")
			}
		}

		throw new Error("invalidPassword")
	} catch (error) {
		res.send({ error: error.message })
	}
}

// Indivisual user

const userProfile = async (req, res) => {
	const { token } = req.body
	try {
		const user = jwt.verify(token, JWT_SECRET)

		const userEmail = user?.email
		await User.findOne({ email: userEmail })
			.then((data) => {
				res.send({
					status: "user found",
					data: data,
				})
			})
			.catch((error) => {
				throw new Error("no token found")
			})
	} catch (error) {
		res.send({ lol: error })
	}
}

// Update user

const updateUser = async (req, res) => {
	const { data } = req.body
	const userData = JSON.parse(data)
	const file = req?.files?.profileImage

	const directoryName = "College Project/users"
	const user = await User.findOne({ _id: req.params.id })
	const imagePath = user?.imagePath
	if (imagePath) {
		await cloudinary.uploader.destroy(imagePath)
	}

	try {
		cloudinary.uploader.upload(
			file?.tempFilePath,
			{
				folder: directoryName,
			},
			async (err, result) => {
				if (userData.oldPassword) {
					const user = await User.findOne({ _id: req.params.id })
					if (await bcrypt.compare(userData.oldPassword, user.password)) {
						bcrypt.hash(userData.newPassword, 10).then((hash) => {
							User.findByIdAndUpdate(
								{ _id: req.params.id },
								{
									...userData,
									password: hash,
									profileUrl: result?.url,
									imagePath: result?.public_id,
								}
							)
								.then((u) => {
									if (file) {
										fs.unlinkSync(file?.tempFilePath)
									}
									res.send({ message: "passwordChanged" })
								})
								.catch((err) => {
									res.send({ status: Hello, error: err })
								})
						})
					} else {
						res.send({ message: "wrongPassword" })
					}
				} else {
					await User.updateOne(
						{ _id: req.params.id },
						{
							...userData,
							profileUrl: result?.url,
							imagePath: result?.public_id,
						}
					)
					if (file) {
						fs.unlinkSync(file?.tempFilePath)
					}
					res.send({ message: "success" })
				}
			}
		)
	} catch (error) {
		res.send(error.message)
	}
}

// add hotel
const hotelListing = async (req, res) => {
	const { data } = req.body
	const hotelData = JSON.parse(data)

	const date = new Date()
	const newDate = date.toLocaleString("en-IN")

	try {
		let imageObj = []
		for (const key in req.files) {
			await cloudinary.uploader.upload(
				req.files[key].tempFilePath,
				{
					folder: "College Project/hotels",
				},
				(err, result) => {
					if (err) throw new Error("Something went wrong")
					imageObj = [
						...imageObj,
						{
							imagePath: result?.url,
							imageLoc: result?.public_id,
						},
					]
					fs.unlinkSync(req.files[key].tempFilePath)
				}
			)
		}
		let hotelDetials = new Hotel({
			...hotelData,
			images: imageObj,
		})
		await hotelDetials.save()
		res.send({ status: "Okay" })
	} catch (error) {
		res.send({ status: "Error", Error: error })
	}
}

const hotelData = async (req, res) => {
	let hotelDetials = await Hotel.find({})
	res.send(hotelDetials)
}

const currentHotelData = async (req, res) => {
	try {
		let result = await Hotel.findOne({ _id: req.params.id })
		if (result) {
			res.send(result)
		} else {
			throw new Error("No hotel Found")
		}
	} catch (error) {
		res.send(error.message)
	}
}

const reviews = async (req, res) => {
	const reviews = await Review.find({}).populate(["author", "reviewOnHotel"])
	res.send(reviews)
}

const postReview = async (req, res) => {
	const { starRating, reviewMessage } = req.body
	const { userID, hotelID } = req.params

	try {
		let result = new Review({
			review: reviewMessage,
			rating: starRating,
			author: userID,
			reviewOnHotel: hotelID,
		})

		let hotel = await Hotel.findByIdAndUpdate(
			{ _id: hotelID },
			{
				$push: {
					reviews: userID,
					rating: starRating,
				},
			},
			{ new: true }
		)
		await hotel.save()
		await result.save()

		res.send({ status: "completed" })
	} catch (error) {
		res.send(error.message)
	}
}

module.exports = {
	signup,
	login,
	userProfile,
	updateUser,
	hotelListing,
	hotelData,
	currentHotelData,
	postReview,
	reviews,
}
