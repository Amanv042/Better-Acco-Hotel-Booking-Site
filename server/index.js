require("dotenv").config()
const express = require("express")
require("./database/config")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 5000

const fileUpload = require("express-fileupload") //this allow client to upload images
// this allow client to upload images
app.use(
	fileUpload({
		useTempFiles: true,
	})
)

const routes = require("./routes/routes")

app.use(express.json())
app.use(cors())

// middleware
app.use("/", routes)

const start = async () => {
	try {
		app.listen(PORT, () => {
			console.log(`Connected to PORT: ${PORT}`)
		})
	} catch (error) {
		console.log(error)
	}
}

start()
