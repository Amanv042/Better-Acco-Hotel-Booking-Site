const mongoose = require("mongoose")

const hotelSchema = new mongoose.Schema({
	listingDate: String,
	hotelName: String,
	price: Number,
	amenitiesCount: String,
	roomType: String,
	leaseType: String,
	hotelDescription: String,
	propertySize: String,
	propertyID: String,
	bedroom: String,
	rating: [{ type: String }],
	bathroom: String,
	garage: String,
	propertyType: String,
	university: String,

	reviews: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "reviews",
		},
	],

	images: [],

	address: {
		landmark: String,
		street: String,
		address: String,
		city: String,
		state: String,
		country: String,
		postalCode: String,
	},

	duration: {
		from: String,
		to: String,
	},

	includedBills: {
		Electricity: { type: Boolean, default: false },
		WiFi: { type: Boolean, default: false },
		Gas: { type: Boolean, default: false },
		Water: { type: Boolean, default: false },
	},
	freebies: {
		FreeBreakfast: { type: Boolean, default: false },
		FreeParking: { type: Boolean, default: false },
		FreeInternet: { type: Boolean, default: false },
		FreeAirportShuttle: { type: Boolean, default: false },
		FreeCancellation: { type: Boolean, default: false },
	},
	amenities: {
		BikeStorage: { type: Boolean, default: false },
		Gym: { type: Boolean, default: false },
		Football: { type: Boolean, default: false },
		LaundryServices: { type: Boolean, default: false },
		OnSiteMaintenance: { type: Boolean, default: false },
		CoffeeBreakfastBar: { type: Boolean, default: false },
		OutdoorArea: { type: Boolean, default: false },
		VendingMachine: { type: Boolean, default: false },
		CarParking: { type: Boolean, default: false },
		GardenCourtyard: { type: Boolean, default: false },
		LaundryRoom: { type: Boolean, default: false },
		StudyRoom: { type: Boolean, default: false },
		BBQ: { type: Boolean, default: false },
		Cinema: { type: Boolean, default: false },
		Concierge: { type: Boolean, default: false },
		Dishwasher: { type: Boolean, default: false },
		Elevator: { type: Boolean, default: false },
		GameRoom: { type: Boolean, default: false },
		LoungeArea: { type: Boolean, default: false },
		Microwave: { type: Boolean, default: false },
		PoolTable: { type: Boolean, default: false },
		SpaSauna: { type: Boolean, default: false },
		TV: { type: Boolean, default: false },
		TableTennis: { type: Boolean, default: false },
	},
	rooms: {
		common: {
			amenities: {
				Desk: { type: Boolean, default: false },
				Chair: { type: Boolean, default: false },
				BathroomCommon: { type: Boolean, default: false },
				BathroomPrivate: { type: Boolean, default: false },
				KitchenCommon: { type: Boolean, default: false },
				KitchenPrivate: { type: Boolean, default: false },
				Curtains: { type: Boolean, default: false },
				Storage: { type: Boolean, default: false },
				Washbasin: { type: Boolean, default: false },
				UnderBedStorage: { type: Boolean, default: false },
				Wardrobe: { type: Boolean, default: false },
				Mirror: { type: Boolean, default: false },
				Sink: { type: Boolean, default: false },
				Windows: { type: Boolean, default: false },
				Bed: { type: Boolean, default: false },
				AirConditioner: { type: Boolean, default: false },
			},
			description: String,
		},
		premium: {
			amenities: {
				Desk: { type: Boolean, default: false },
				Chair: { type: Boolean, default: false },
				BathroomCommon: { type: Boolean, default: false },
				BathroomPrivate: { type: Boolean, default: false },
				KitchenCommon: { type: Boolean, default: false },
				KitchenPrivate: { type: Boolean, default: false },
				Curtains: { type: Boolean, default: false },
				Storage: { type: Boolean, default: false },
				Washbasin: { type: Boolean, default: false },
				UnderBedStorage: { type: Boolean, default: false },
				Wardrobe: { type: Boolean, default: false },
				Mirror: { type: Boolean, default: false },
				Sink: { type: Boolean, default: false },
				Windows: { type: Boolean, default: false },
				Bed: { type: Boolean, default: false },
				AirConditioner: { type: Boolean, default: false },
			},
			description: String,
		},
		deluxe: {
			amenities: {
				Desk: { type: Boolean, default: false },
				Chair: { type: Boolean, default: false },
				BathroomCommon: { type: Boolean, default: false },
				BathroomPrivate: { type: Boolean, default: false },
				KitchenCommon: { type: Boolean, default: false },
				KitchenPrivate: { type: Boolean, default: false },
				Curtains: { type: Boolean, default: false },
				Storage: { type: Boolean, default: false },
				Washbasin: { type: Boolean, default: false },
				UnderBedStorage: { type: Boolean, default: false },
				Wardrobe: { type: Boolean, default: false },
				Mirror: { type: Boolean, default: false },
				Sink: { type: Boolean, default: false },
				Windows: { type: Boolean, default: false },
				Bed: { type: Boolean, default: false },
				AirConditioner: { type: Boolean, default: false },
			},
			description: String,
		},
	},
})

module.exports = mongoose.model("hotels", hotelSchema)
