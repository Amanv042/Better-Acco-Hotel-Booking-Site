import { useState } from "react"
import Accordion from "../../components/Accordion/Accordion"
import FooterComponent from "../../components/FooterComponent/FooterComponent"
import Header from "../../components/Header/Header"
import ModernInput from "../../components/ModernInput/ModernInput"
import { useForm } from "react-hook-form"
import ToastPopup from "../../components/ToastPopup/ToastPopup"
import { useNavigate } from "react-router-dom"

const freebies = [
	"Free Breakfast",
	"Free Parking",
	"Free Internet",
	"Free Airport Shuttle",
	"Free Cancellation",
]
const amenities = [
	"Bike Storage",
	"Gym",
	"Football",
	"Laundry Services",
	"On site Maintainence",
	"Coffee-Breakfast Bar",
	"Outdoor Area",
	"Vending Machine",
	"Car Parking",
	"Garden/Courtyard",
	"Laundary Room",
	"Study Room",
	"BBQ",
	"Cinema",
	"Concierge",
	"Dishwasher",
	"Elevator",
	"Game Room",
	"Lounge Area",
	"Microwave",
	"Pool Table",
	"Spa & Sauna",
	"TV",
	"Table Tennis",
]
const roomFacilities = [
	"Desk",
	"Chair",
	"Bathroom Common",
	"Bathroom Private",
	"Kitchen Common",
	"Kitchen Private",
	"Curtains",
	"Storage",
	"Washbasin",
	"Under bed Storage",
	"Wardrobe",
	"Mirror",
	"Sink",
	"Windows",
	"Bed",
	"Air Conditioner",
]
const bill = ["Electricity", "WiFi", "Gas", "Water"]



export default function HotelForm() {
	const [loading, setLoading] = useState(false)
	const [messageType, setMessageType] = useState("")
	const [toast, setToast] = useState(false)
	const [message, setMessage] = useState("")

	const navigate = useNavigate()

	const [commonRoom, setCommonRoom] = useState(null)
	const [premiumRoom, setPremiumRoom] = useState(null)
	const [deluxeRoom, setDeluxeRoom] = useState(null)

	const { register, handleSubmit } = useForm()

	async function handleForm(data) {
		try {
			setLoading(true)
			if (data.hotelImages.length < 4) {
				setMessageType("warning")
				throw new Error("Less Images")
			}

			const hotelImage1 = data.hotelImages[0]
			const hotelImage2 = data.hotelImages[1]
			const hotelImage3 = data.hotelImages[2]
			const hotelImage4 = data.hotelImages[3]

			const formData = new FormData()
			formData.append("data", JSON.stringify(data))
			formData.append("hotelImage1", hotelImage1)
			formData.append("hotelImage2", hotelImage2)
			formData.append("hotelImage3", hotelImage3)
			formData.append("hotelImage4", hotelImage4)

			let response = await fetch(
				`${import.meta.env.VITE_SERVER_BASE_URL}/add-listing`,
				{
					method: "POST",
					body: formData,
				}
			)
			await response.json()

			setLoading(false)
			navigate("/")
		} catch (error) {
			setMessage(error.message)
			setToast(true)
			setTimeout(() => {
				setToast(false)
				setMessage("")
			}, 3000)
		}
	}

	return (
		<>
			<Header />
			<ToastPopup message={message} messageType={messageType} isActive={toast} />

			<form
				className="custom-container"
				onSubmit={handleSubmit(handleForm)}
				encType="multipart/form-data"
			>
				<h1 className="my-4 font-bold text-4xl text-center">Hotel Form</h1>
				<div className="grid grid-cols-2 gap-4">
					<label
						htmlFor="hotelName"
						className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
					>
						<input
							type="text"
							id="hotelName"
							className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  py-3 px-2"
							placeholder="Hotel Name"
							{...register("hotelName")}
						/>

						<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
							Hotel Name
						</span>
					</label>
					<label
						htmlFor="price"
						className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
					>
						<input
							type="text"
							id="price"
							className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  py-3 px-2"
							placeholder="Price"
							{...register("price")}
						/>

						<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
							Price
						</span>
					</label>
					<label
						htmlFor="street"
						className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
					>
						<input
							type="text"
							id="street"
							className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  py-3 px-2"
							placeholder="Street"
							{...register("address.street")}
						/>

						<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
							Street
						</span>
					</label>
					<label
						htmlFor="landmark"
						className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
					>
						<input
							type="text"
							id="landmark"
							className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  py-3 px-2"
							placeholder="Landmark"
							{...register("address.landmark")}
						/>

						<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
							Landmark
						</span>
					</label>
					<label
						htmlFor="city"
						className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
					>
						<input
							type="text"
							id="city"
							className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  py-3 px-2"
							placeholder="City"
							{...register("address.city")}
						/>

						<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
							City
						</span>
					</label>
					<label
						htmlFor="state"
						className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
					>
						<input
							type="text"
							id="state"
							className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  py-3 px-2"
							placeholder="State"
							{...register("address.state")}
						/>

						<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
							State
						</span>
					</label>
					<label
						htmlFor="country"
						className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
					>
						<input
							type="text"
							id="country"
							className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  py-3 px-2"
							placeholder="Country"
							{...register("address.country")}
						/>

						<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
							Country
						</span>
					</label>
					<label
						htmlFor="postalCode"
						className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
					>
						<input
							type="text"
							id="postalCode"
							className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  py-3 px-2"
							placeholder="Postal Code"
							{...register("address.postalCode")}
						/>

						<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
							Postal Code
						</span>
					</label>
					<div className="grid grid-cols-2 gap-4">
						<label
							htmlFor="from"
							className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
						>
							<input
								type="date"
								id="from"
								className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  py-3 px-2"
								placeholder="Duration from"
								{...register("duration.from")}
							/>

							<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
								Duration From
							</span>
						</label>
						<label
							htmlFor="to"
							className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
						>
							<input
								type="date"
								id="to"
								className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  py-3 px-2"
								placeholder="Duration to"
								{...register("duration.to")}
							/>

							<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
								Duration to
							</span>
						</label>
					</div>
					<label
						htmlFor="university"
						className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
					>
						<input
							type="text"
							id="university"
							className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  py-3 px-2"
							placeholder="University near hotel"
							{...register("university")}
						/>

						<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
							University near hotel
						</span>
					</label>
					<label
						htmlFor="PropertySize"
						className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
					>
						<input
							type="text"
							id="PropertySize"
							className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  py-3 px-2"
							placeholder="Property Size"
							{...register("propertySize")}
						/>

						<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
							Property Size
						</span>
					</label>
					<label
						htmlFor="propertyType"
						className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
					>
						<input
							type="text"
							id="propertyType"
							className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  py-3 px-2"
							placeholder="Property Type"
							{...register("propertyType")}
						/>

						<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
							Property Type
						</span>
					</label>
					<select
						className="select select-bordered w-full focus:outline-[var(--theme-clr)]"
						{...register("garage")}
					>
						<option disabled selected value="0">
							Number of garage
						</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
						<option>10</option>
					</select>
					<select
						className="select select-bordered w-full focus:outline-[var(--theme-clr)]"
						{...register("bedroom")}
					>
						<option disabled selected value="0">
							Number of bedrooms
						</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
						<option>10</option>
					</select>
					<select
						className="select select-bordered w-full focus:outline-[var(--theme-clr)]"
						{...register("bathroom")}
					>
						<option disabled selected value="0">
							Number of bathrooms
						</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
						<option>10</option>
					</select>
					<select
						className="select select-bordered w-full focus:outline-[var(--theme-clr)]"
						{...register("roomType")}
					>
						<option disabled selected value="not specified">
							Room Type
						</option>
						<option>Ensuite</option>
						<option>Non-Ensuite</option>
						<option>Twin-Ensuite</option>
						<option>Studio</option>
						<option>Twin-Studio</option>
					</select>
					<select
						className="select select-bordered w-full focus:outline-[var(--theme-clr)]"
						{...register("leaseType")}
					>
						<option disabled selected value="not specified">
							Lease Type
						</option>
						<option>Summer / Short Stay 8-12 Weeks</option>
						<option>Semester Stay 12-24 Weeks</option>
						<option>Stay 24-36 Weeks</option>
						<option>Full Year Stay 36-44 Weeks</option>
						<option>Complete Education Stay 50-52 Weeks</option>
					</select>
				</div>
				<div className="my-4">
					<h2 className="font-semibold text-lg">Freebies</h2>
					<div className="grid grid-cols-3">
						{freebies.map((items, index) => {
							return (
								<div className="flex gap-[0.5rem] items-center " key={index}>
									<input
										type="checkbox"
										name={items.split(" ").join("")}
										{...register(`freebies.${items.split(" ").join("")}`)}
										id={items.split(" ").join("-")}
									/>
									<label htmlFor={items.split(" ").join("-")}>{items}</label>
								</div>
							)
						})}
					</div>
				</div>
				<div className="my-4">
					<h2 className="font-semibold text-lg">Amenities</h2>
					<div className="grid grid-cols-3 my-2">
						{amenities.map((amenity, index) => {
							return (
								<div className="flex gap-[0.5rem]  items-center" key={index}>
									<input
										type="checkbox"
										name={amenity.split(" ").join("")}
										{...register(`amenities.${amenity.split(" ").join("")}`)}
										id={amenity.split(" ").join("-")}
									/>
									<label htmlFor={amenity.split(" ").join("-")}>{amenity}</label>
								</div>
							)
						})}
					</div>
				</div>
				<div className="my-4">
					<h2 className="font-semibold text-lg">Included Bill</h2>
					<div className="grid grid-cols-3 my-2">
						{bill.map((bill, index) => {
							return (
								<div className="flex gap-[0.5rem]  items-center" key={index}>
									<input
										type="checkbox"
										name={bill.split(" ").join("")}
										{...register(`bills.${bill.split(" ").join("")}`)}
										id={bill.split(" ").join("-")}
									/>
									<label htmlFor={bill.split(" ").join("-")}>{bill}</label>
								</div>
							)
						})}
					</div>
				</div>
				<textarea
					rows={8}
					className="resize-none textarea textarea-bordered w-full focus:outline-[var(--theme-clr)]"
					placeholder="Hotel Description..."
					{...register("hotelDescription")}
				></textarea>

				<h2 className="my-4 font-semibold text-3xl text-center">Room Types</h2>

				<h3>Available Room Types:</h3>
				<div className="flex gap-8  items-center">
					<label htmlFor="commonRoom" className="flex gap-2 items-center">
						<input
							type="checkbox"
							id="commonRoom"
							onChange={() => setCommonRoom(!commonRoom)}
						/>
						<span>Common Room</span>
					</label>
					<label htmlFor="premiumRoom" className="flex gap-2 items-center">
						<input
							type="checkbox"
							id="premiumRoom"
							onChange={() => setPremiumRoom(!premiumRoom)}
						/>
						<span>Premium Room</span>
					</label>
					<label htmlFor="deluxeRoom" className="flex gap-2 items-center">
						<input
							type="checkbox"
							id="deluxeRoom"
							onChange={() => setDeluxeRoom(!deluxeRoom)}
						/>
						<span>Deluxe Room</span>
					</label>
				</div>

				<div className="grid gap-4 my-4">
					{commonRoom && (
						<Accordion accordionName="Common Room">
							<div className="grid grid-cols-3 my-2">
								{roomFacilities.map((facility, index) => {
									return (
										<div className="flex gap-[0.5rem]  items-center" key={index}>
											<input
												type="checkbox"
												name={facility.split(" ").join("")}
												{...register(
													`rooms.common.amenities.${facility.split(" ").join("")}`
												)}
												id={`${facility.split(" ").join("-")}common`}
											/>
											<label htmlFor={`${facility.split(" ").join("-")}common`}>
												{facility}
											</label>
										</div>
									)
								})}
							</div>
							<textarea
								rows={8}
								className="resize-none textarea textarea-bordered w-full focus:outline-[var(--theme-clr)]"
								placeholder="Common room description..."
								{...register(`rooms.common.description`)}
							></textarea>
						</Accordion>
					)}
					{premiumRoom && (
						<Accordion accordionName="Premium Room">
							<div className="grid grid-cols-3 my-2">
								{roomFacilities.map((facility, index) => {
									return (
										<div className="flex gap-[0.5rem]  items-center" key={index}>
											<input
												type="checkbox"
												name={facility.split(" ").join("")}
												{...register(
													`rooms.premium.amenities.${facility.split(" ").join("")}`
												)}
												id={`${facility.split(" ").join("-")}premium`}
											/>
											<label htmlFor={`${facility.split(" ").join("-")}premium`}>
												{facility}
											</label>
										</div>
									)
								})}
							</div>
							<textarea
								rows={8}
								className="resize-none textarea textarea-bordered w-full focus:outline-[var(--theme-clr)]"
								placeholder="Premium room description..."
								{...register(`rooms.premium.description`)}
							></textarea>
						</Accordion>
					)}
					{deluxeRoom && (
						<Accordion accordionName="Deluxe Room">
							<div className="grid grid-cols-3 my-2">
								{roomFacilities.map((facility, index) => {
									return (
										<div className="flex gap-[0.5rem]  items-center" key={index}>
											<input
												type="checkbox"
												name={facility.split(" ").join("")}
												{...register(
													`rooms.deluxe.amenities.${facility.split(" ").join("")}`
												)}
												id={`${facility.split(" ").join("-")}deluxe`}
											/>
											<label htmlFor={`${facility.split(" ").join("-")}deluxe`}>
												{facility}
											</label>
										</div>
									)
								})}
							</div>
							<textarea
								rows={8}
								className="resize-none textarea textarea-bordered w-full focus:outline-[var(--theme-clr)]"
								placeholder="Deluxe room description..."
								{...register(`rooms.deluxe.description`)}
							></textarea>
						</Accordion>
					)}
				</div>
				<input
					type="file"
					className="file-input file-input-bordered file-input-accent w-full max-w-xs"
					multiple
					accept=".png,.jpg,.jpeg"
					{...register("hotelImages")}
				/>
				<button
					type="submit"
					className="border w-full py-2 rounded-md bg-[var(--theme-clr)] text-white text-xl font-semibold my-4"
				>
					{loading ? "Uploading..." : "Upload Hotel Data"}
				</button>
			</form>

			<FooterComponent partners={false} propertyList={false} />
		</>
	)
}
