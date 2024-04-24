import Accordion from "../../components/Accordion/Accordion"
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb"
import FooterComponent from "../../components/FooterComponent/FooterComponent"
import Header from "../../components/Header/Header"
import HotelCard from "../../components/HotelCard/HotelCard"
import SearchBar from "../../components/SearchBar/SearchBar"
import { useEffect, useState } from "react"

const dtToday = new Date()
let month = dtToday.getMonth() + 1
let day = dtToday.getDate()
let year = dtToday.getFullYear()
if (month < 10) month = "0" + month.toString()
if (day < 10) day = "0" + day.toString()
const minDate = year + "-" + month + "-" + day

const amenities = [
	"Bike Storage",
	"Gym",
	"Football",
	"Laundry Services",
	"On site Maintainence",
	"Coffee Breakfast Bar",
	"Outdoor Area",
	"Vending Machine",
	"Car Parking",
	"Garden Courtyard",
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
	"Spa Sauna",
	"TV",
	"TableTennis",
]

export default function PropertyListing() {
	const [query, setQuery] = useState("")
	const [barValue, setBarValue] = useState(0)
	const [hotelDetails, setHotelDetails] = useState([])
	const [freeStuff, setFreeStuff] = useState({})
	const [amenitiesChecks, setAmenitiesChecks] = useState({})
	const [radioBtn, setRadioBtn] = useState("")
	const [radioRoomType, setRadioRoomType] = useState("")
	const [radioLeaseType, setRadioLeaseType] = useState("")
	const [checkIn, setCheckIn] = useState("")
	const [checkOut, setCheckOut] = useState("")
	const [sort, setSort] = useState(false)

	const [price, setPrice] = useState({
		minPrice: "",
		maxPrice: "",
	})

	function handlePrice(e) {
		const { name, value } = e.target
		setPrice((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	function handleSort() {
		setSort(!sort)

		sort
			? setHotelDetails(hotelDetails?.sort((a, b) => b.price - a.price))
			: setHotelDetails(hotelDetails?.sort((a, b) => a.price - b.price))
	}

	function handleAmenities(e) {
		const { name, checked } = e.target
		setAmenitiesChecks((prev) => ({
			...prev,
			[name]: checked,
		}))
	}

	function handleFreebies(e) {
		const { name, checked } = e.target
		setFreeStuff((prev) => ({
			...prev,
			[name]: checked,
		}))
	}

	useEffect(() => {
		async function hotelList() {
			let result = await fetch(
				`${import.meta.env.VITE_SERVER_BASE_URL}/hotelData/`
			)
			result = await result.json()
			setHotelDetails(result)
		}
		hotelList()
	}, [barValue, query, barValue, radioBtn, freeStuff, amenitiesChecks])

	function handleReset() {
		setQuery("")
		setBarValue(0)
		setFreeStuff({})
		setPrice({
			minPrice: "",
			maxPrice: "",
		})
		setAmenitiesChecks({})
		setRadioBtn("")
		setRadioRoomType("")
		setRadioLeaseType("")
		setCheckIn("")
		setCheckOut("")
		setSort(false)
	}

	return (
		<>
			<Header />

			<main className="custom-container">
				<BreadCrumb />

				<h1 className="text-center lg:text-start text-4xl">
					Student Accommodation <span className="font-bold italic">Birminghan</span>
				</h1>

				<section className="my-10">
					<SearchBar setQuery={setQuery} query={query} />
				</section>

				<section className="grid lg:grid-cols-4 lg:gap-8">
					<div className="lg:col-span-1">
						<div className="flex item-center justify-between mb-4">
							<h2 className="text-2xl font-semibold">Filter</h2>
							<button
								onClick={handleReset}
								className="border rounded-lg py-2 px-4 bg-[--theme-clr] text-white font-semibold"
							>
								clear Filter
							</button>
						</div>
						<div className="flex flex-col gap-4">
							<Accordion accordionName="Price" defaultChecked={true}>
								<div className="grid grid-cols-2 gap-2">
									<label>
										<input
											name="minPrice"
											className="transition-all duration-500 ease-in-out  w-full border py-2 px-2"
											type="number"
											placeholder="min price"
											value={price.minPrice}
											onChange={handlePrice}
										/>
									</label>
									<label>
										<input
											name="maxPrice"
											className="transition-all duration-500 ease-in-out  w-full border py-2 px-2"
											type="number"
											placeholder="max price"
											value={price.maxPrice}
											onChange={handlePrice}
										/>
									</label>
								</div>
							</Accordion>
							<Accordion accordionName="Rating">
								<div className="grid grid-cols-5 gap-2">
									<button
										onClick={() => setRadioBtn(1)}
										className={`border py-2 px-4 rounded-md ${
											radioBtn === 1 && "bg-[--theme-clr] text-white"
										}`}
									>
										+1
									</button>
									<button
										onClick={() => setRadioBtn(2)}
										className={`border py-2 px-4 rounded-md ${
											radioBtn === 2 && "bg-[--theme-clr] text-white"
										}`}
									>
										+2
									</button>
									<button
										onClick={() => setRadioBtn(3)}
										className={`border py-2 px-4 rounded-md ${
											radioBtn === 3 && "bg-[--theme-clr] text-white"
										}`}
									>
										+3
									</button>
									<button
										onClick={() => setRadioBtn(4)}
										className={`border py-2 px-4 rounded-md ${
											radioBtn === 4 && "bg-[--theme-clr] text-white"
										}`}
									>
										+4
									</button>
									<button
										onClick={() => setRadioBtn(5)}
										className={`border py-2 px-4 rounded-md ${
											radioBtn === 5 && "bg-[--theme-clr] text-white"
										}`}
									>
										+5
									</button>
								</div>
							</Accordion>
							<Accordion accordionName="Freebies">
								<div className="flex flex-col gap-2">
									<label className="flex items-center gap-2">
										<input
											name="FreeBreakfast"
											className="transition-all duration-500 ease-in-out  w-4 aspect-square"
											type="checkbox"
											onChange={handleFreebies}
										/>
										<span>Free Breakfast</span>
									</label>
									<label className="flex items-center gap-2">
										<input
											name="FreeParking"
											className="transition-all duration-500 ease-in-out  w-4 aspect-square"
											type="checkbox"
											onChange={handleFreebies}
										/>
										<span>Free Parking</span>
									</label>
									<label className="flex items-center gap-2">
										<input
											name="FreeInternet"
											onChange={handleFreebies}
											className="transition-all duration-500 ease-in-out  w-4 aspect-square"
											type="checkbox"
										/>
										<span>Free Internet</span>
									</label>
									<label className="flex items-center gap-2">
										<input
											name="FreeAirportShuttle"
											className="transition-all duration-500 ease-in-out  w-4 aspect-square"
											type="checkbox"
											onChange={handleFreebies}
										/>
										<span>Free Airport Shuttle</span>
									</label>
									<label className="flex items-center gap-2">
										<input
											name="FreeCancelation"
											className="transition-all duration-500 ease-in-out  w-4 aspect-square"
											type="checkbox"
											onChange={handleFreebies}
										/>
										<span>Free Cancelation</span>
									</label>
								</div>
							</Accordion>
							<Accordion accordionName="Amenities">
								{amenities.map((amenity, index) => {
									return (
										<label
											htmlFor={amenity.split(" ").join("-")}
											className="flex items-center gap-2 text-lg"
											key={index}
										>
											<input
												className="transition-all duration-500 ease-in-out  w-4 aspect-square"
												type="checkbox"
												name={amenity.split(" ").join("")}
												id={amenity.split(" ").join("-")}
												onChange={handleAmenities}
											/>
											<span>{amenity}</span>
										</label>
									)
								})}
							</Accordion>
							<Accordion accordionName="Room Type">
								<div className="flex flex-col gap-2">
									<label className="flex items-center gap-2">
										<input
											name="roomType"
											className="transition-all duration-500 ease-in-out  w-4 aspect-square"
											type="radio"
											value="Ensuite"
											onChange={(e) => setRadioRoomType(e.target.value)}
										/>
										<span>Ensuite</span>
									</label>
									<label className="flex items-center gap-2">
										<input
											name="roomType"
											className="transition-all duration-500 ease-in-out  w-4 aspect-square"
											type="radio"
											value="Non-Ensuite"
											onChange={(e) => setRadioRoomType(e.target.value)}
										/>
										<span>Non-Ensuite</span>
									</label>
									<label className="flex items-center gap-2">
										<input
											name="roomType"
											className="transition-all duration-500 ease-in-out  w-4 aspect-square"
											type="radio"
											value="Twin-Ensuite"
											onChange={(e) => setRadioRoomType(e.target.value)}
										/>
										<span>Twin-Ensuite</span>
									</label>
									<label className="flex items-center gap-2">
										<input
											name="roomType"
											className="transition-all duration-500 ease-in-out  w-4 aspect-square"
											type="radio"
											value="Studio"
											onChange={(e) => setRadioRoomType(e.target.value)}
										/>
										<span>Studio</span>
									</label>
									<label className="flex items-center gap-2">
										<input
											name="roomType"
											className="transition-all duration-500 ease-in-out  w-4 aspect-square"
											type="radio"
											value="Twin-Studio"
											onChange={(e) => setRadioRoomType(e.target.value)}
										/>
										<span>Twin-Studio</span>
									</label>
								</div>
							</Accordion>
							<Accordion accordionName="Move in Date">
								<div className="flex flex-col gap-4">
									<label
										htmlFor="checkIn"
										className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
									>
										<input
											type="date"
											id="checkIn"
											className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  py-3 px-2"
											placeholder="Check In"
											name="checkIn"
											min={minDate}
											onChange={(e) => setCheckIn(e.target.value)}
										/>
										<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
											Check In
										</span>
									</label>
									<label
										htmlFor="checkOut"
										className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
									>
										<input
											type="date"
											id="checkOut"
											className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  py-3 px-2"
											placeholder="Check Out"
											name="checkOut"
											min={minDate}
											onChange={(e) => setCheckOut(e.target.value)}
										/>
										<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
											Check Out
										</span>
									</label>
								</div>
							</Accordion>
							<Accordion accordionName="Lease Type">
								<div className="flex flex-col gap-2">
									<label className="flex items-center gap-2">
										<input
											name="leaseType"
											className="transition-all duration-500 ease-in-out  w-4 aspect-square"
											type="radio"
											value="Summer / Short Stay 8-12 Weeks"
											onChange={(e) => setRadioLeaseType(e.target.value)}
										/>
										<span>Summer / Short Stay 8-12 Weeks</span>
									</label>
									<label className="flex items-center gap-2">
										<input
											name="leaseType"
											className="transition-all duration-500 ease-in-out  w-4 aspect-square"
											type="radio"
											value="Semester Stay 12-24 Weeks"
											onChange={(e) => setRadioLeaseType(e.target.value)}
										/>
										<span>Semester Stay 12-24 Weeks</span>
									</label>
									<label className="flex items-center gap-2">
										<input
											name="leaseType"
											className="transition-all duration-500 ease-in-out  w-4 aspect-square"
											type="radio"
											value="Stay 24-36 Weeks"
											onChange={(e) => setRadioLeaseType(e.target.value)}
										/>
										<span>Stay 24-36 Weeks</span>
									</label>
									<label className="flex items-center gap-2">
										<input
											name="leaseType"
											className="transition-all duration-500 ease-in-out  w-4 aspect-square"
											type="radio"
											value="Full Year Stay 36-44 Weeks"
											onChange={(e) => setRadioLeaseType(e.target.value)}
										/>
										<span>Full Year Stay 36-44 Weeks</span>
									</label>
									<label className="flex items-center gap-2">
										<input
											name="leaseType"
											className="transition-all duration-500 ease-in-out  w-4 aspect-square"
											type="radio"
											value="Complete Education Stay 50-52 Weeks"
											onChange={(e) => setRadioLeaseType(e.target.value)}
										/>
										<span>Complete Education Stay 50-52 Weeks</span>
									</label>
								</div>
							</Accordion>
						</div>
					</div>
					<div className="lg:col-span-3 mt-8 lg:m-0">
						<div className="text-right mb-8">
							{/* <p className="font-bold text-xl">
								Showing 4 of <span className="text-red-400">256 places</span>
							</p> */}
							<button onClick={handleSort} className="border rounded-lg  px-4 py-2">
								Sort by Price
							</button>
						</div>
						<div className="grid gap-4">
							{hotelDetails
								?.filter((h) =>
									price.minPrice && price.maxPrice
										? h.price >= price?.minPrice && h.price <= price?.maxPrice
										: h
								)
								?.filter(
									(h) =>
										query === "" ||
										h?.hotelName.toLowerCase().includes(query.toLowerCase())
								)
								?.filter((h) => {
									const ratingLength = h.rating.length
									const rating = h.rating.reduce((acc, curr) => {
										return acc + +curr
									}, 0)
									const avgRating = rating / ratingLength

									return radioBtn ? Math.round(avgRating) === +radioBtn : h
								})

								?.filter((hotel) => {
									return (
										(barValue === 0 || hotel?.price < Number(barValue)) &&
										(checkIn === "" || hotel?.duration?.from === checkIn) &&
										(checkOut === "" || hotel?.duration?.to === checkOut) &&
										(!freeStuff.FreeBreakfast ||
											hotel?.freebies?.FreeBreakfast === freeStuff?.FreeBreakfast) &&
										(!freeStuff?.FreeParking ||
											hotel?.freebies?.FreeParking === freeStuff?.FreeParking) &&
										(!freeStuff?.FreeInternet ||
											hotel?.freebies?.FreeInternet === freeStuff?.FreeInternet) &&
										(!freeStuff?.FreeAirportShuttle ||
											hotel.freebies?.FreeAirportShuttle ===
												freeStuff?.FreeAirportShuttle) &&
										(!freeStuff?.FreeCancellation ||
											hotel.freebies?.FreeCancellation === freeStuff?.FreeCancellation) &&
										(!amenitiesChecks?.BikeStorage ||
											hotel?.amenities.BikeStorage === amenitiesChecks?.BikeStorage) &&
										(!amenitiesChecks?.Gym ||
											hotel?.amenities.Gym === amenitiesChecks?.Gym) &&
										(!amenitiesChecks?.Football ||
											hotel?.amenities.Football === amenitiesChecks?.Football) &&
										(!amenitiesChecks?.LaundryServices ||
											hotel?.amenities.LaundryServices ===
												amenitiesChecks?.LaundryServices) &&
										(!amenitiesChecks?.OnsiteMaintainence ||
											hotel?.amenities.OnsitMaintainence ===
												amenitiesChecks?.OnsiteMaintainence) &&
										(!amenitiesChecks?.CoffeeBreakfastBar ||
											hotel?.amenities.CoffeeBreakfastBar ===
												amenitiesChecks?.CoffeeBreakfastBar) &&
										(!amenitiesChecks?.OutdoorArea ||
											hotel?.amenities.OutdoorArea === amenitiesChecks?.OutdoorArea) &&
										(!amenitiesChecks?.VendingMachine ||
											hotel?.amenities.VendingMachine ===
												amenitiesChecks?.VendingMachine) &&
										(!amenitiesChecks?.CarParking ||
											hotel?.amenities.CarParking === amenitiesChecks?.CarParking) &&
										(!amenitiesChecks?.GardenCourtyard ||
											hotel?.amenities.GardenCourtyard ===
												amenitiesChecks?.GardenCourtyard) &&
										(!amenitiesChecks?.LaundaryRoom ||
											hotel?.amenities.LaundaryRoom === amenitiesChecks?.LaundaryRoom) &&
										(!amenitiesChecks?.StudyRoom ||
											hotel?.amenities.StudyRoom === amenitiesChecks?.StudyRoom) &&
										(!amenitiesChecks?.BBQ ||
											hotel?.amenities.BBQ === amenitiesChecks?.BBQ) &&
										(!amenitiesChecks?.Cinema ||
											hotel?.amenities.Cinema === amenitiesChecks?.Cinema) &&
										(!amenitiesChecks?.Concierge ||
											hotel?.amenities.Concierge === amenitiesChecks?.Concierge) &&
										(!amenitiesChecks?.Dishwasher ||
											hotel?.amenities.Dishwasher === amenitiesChecks?.Dishwasher) &&
										(!amenitiesChecks?.Elevator ||
											hotel?.amenities.Elevator === amenitiesChecks?.Elevator) &&
										(!amenitiesChecks?.GameRoom ||
											hotel?.amenities.GameRoom === amenitiesChecks?.GameRoom) &&
										(!amenitiesChecks?.LoungeArea ||
											hotel?.amenities.LoungeArea === amenitiesChecks?.LoungeArea) &&
										(!amenitiesChecks?.Microwave ||
											hotel?.amenities.Microwave === amenitiesChecks?.Microwave) &&
										(!amenitiesChecks?.PoolTable ||
											hotel?.amenities.PoolTable === amenitiesChecks?.PoolTable) &&
										(!amenitiesChecks?.TV ||
											hotel?.amenities.TV === amenitiesChecks?.TV) &&
										(!amenitiesChecks?.TableTennis ||
											hotel?.amenities.TableTennis === amenitiesChecks?.TableTennis) &&
										(!amenitiesChecks?.SpaSauna ||
											hotel?.amenities.SpaSauna === amenitiesChecks?.SpaSauna) &&
										(radioRoomType === "" ||
											hotel.roomType?.toLowerCase() === radioRoomType?.toLowerCase()) &&
										(radioLeaseType === "" ||
											hotel?.leaseType?.toLowerCase() === radioLeaseType?.toLowerCase())
									)
								})
								?.map((hotel) => {
									return <HotelCard hotel={hotel} key={hotel?.name} />
								})}
						</div>
						{hotelDetails.length >= 10 && (
							<button className="bg-black text-white w-full py-2 rounded-md my-4">
								Show more results
							</button>
						)}
					</div>
				</section>
			</main>
			<br />
			<FooterComponent partners={false} propertyList={false} />
		</>
	)
}
