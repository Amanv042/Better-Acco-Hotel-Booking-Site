const mongoose = require("mongoose")

const mongoURL = process.env.MONGODB_URL

mongoose
	.connect(mongoURL)
	.then(() => {
		console.log("Database Connected")
	})
	.catch((e) => console.log(e))
