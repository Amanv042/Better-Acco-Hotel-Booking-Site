import FooterComponent from "../../components/FooterComponent/FooterComponent"
import Header from "../../components/Header/Header"

import Reviews from "../../components/Reviews/Reviews"
import Faq from "../../components/Faq/Faq"
import PaymentPolicies from "../../components/PaymentPolicies/PaymentPolicies"
import LocationMap from "../../components/LocationMap/LocationMap"
import CancellationPolicies from "../../components/CancellationPolicies/CancellationPolicies"
import Offers from "../../components/Offers/Offers"
import PropertyDescription from "../../components/PropertyDescription/PropertyDescription"
import WhatYouGet from "../../components/WhatYouGet/WhatYouGet"
import RoomType from "../../components/RoomType/RoomType"
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb"
import ImageGallery from "../../components/ImageGallery/ImageGallery"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

// import required modules

export default function PropertyDetails() {
	const params = useParams()

	const [hotelData, setHotelData] = useState({})
	const [avgRating, setAvgRating] = useState()
	const id = params.hotelID

	useEffect(() => {
		async function hotelList() {
			let result = await fetch(
				`${import.meta.env.VITE_SERVER_BASE_URL}/hotel/${id}`
			)
			result = await result.json()
			setHotelData(result)

			const ratingLength = result.rating.length
			const rating = result.rating.reduce((acc, curr) => {
				return acc + +curr
			}, 0)
			setAvgRating(rating / ratingLength)
		}
		hotelList()
	}, [id])

	return (
		<>
			<Header />

			<main>
				<div className="custom-container grid gap-4">
					{/* breadCrums, images and basic details */}
					<div className="border border-[var(--theme-clr)] px-8 py-6 rounded-2xl flex flex-col gap-4">
						<BreadCrumb />
						<ImageGallery images={hotelData?.images} />
						{/* Navigation Tabs */}
						<div className="flex justify-end">
							{/* <div className=" lg:flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2"> */}
							{/* <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4 gap-2">
								<button
									className="border border-[var(--theme-clr)] lg:px-4 py-2 rounded items-center justify-center
								 flex gap-2"
								>
									<span>
										<i className="fa-solid fa-camera"> </i>
									</span>
									<span>Photos</span>
								</button>
								<button className="border border-[var(--theme-clr)] px-4 py-2 rounded items-center justify-center flex gap-2">
									<span>
										<i className="fa-solid fa-circle-play"></i>
									</span>
									<span>Videos</span>
								</button>
								<button className="border border-[var(--theme-clr)] px-4 py-2 rounded items-center justify-center flex gap-2">
									<span>3D View</span>
								</button>
								<button className="border border-[var(--theme-clr)] px-4 py-2 rounded items-center justify-center flex gap-2">
									<span>
										<i className="fa-solid fa-map"></i>
									</span>
									<span>Map</span>
								</button>
							</div> */}
							<div className="bg-[var(--light-theme-clr)] py-2 px-4 rounded my-2">
								<span className="text-[var(--theme-clr)]">
									<i className="fa-solid fa-star"></i>
								</span>
								<span className="font-bold">
									{" "}
									{avgRating ? Math.round(avgRating) : "No Ratings yet"}
								</span>{" "}
								<span className="text-gray-600">
									{avgRating
										? `(${hotelData.rating?.length} reviews)`
										: ""}
								</span>
							</div>
						</div>
						<hr />

						{/* Property details */}
						<section className="grid gap-2">
							<h1 className="font-bold lg:text-4xl text-2xl md:text-4xl mt-4">
								{hotelData?.hotelName}
							</h1>
							<p className="text-gray-600">
								{hotelData?.address?.street}, {hotelData?.address?.city},{" "}
								{hotelData?.address?.state}, {hotelData?.address?.country}
							</p>
							{/* <p className="text-gray-600 mb-4">
								<span>
									<i className="fa-solid fa-location-dot"></i>
								</span>{" "}
								0.8 mi from City Center{" "}
								<span>
									<button>View on map</button>
								</span>
							</p> */}
							<div className="flex lg:flex-row flex-col gap-4 ">
								<div className="bg-gray-100 py-2 px-4 rounded flex items-center gap-2">
									<span>
										<i className="fa-solid fa-bolt"></i>
									</span>
									<span>Laundry Facility</span>
								</div>
								<div className="bg-gray-100 py-2 px-4 rounded flex items-center gap-2">
									<span>
										<i className="fa-solid fa-bolt"></i>
									</span>
									<span>Bills Included</span>
								</div>
								<div className="bg-gray-100 py-2 px-4 rounded flex items-center gap-2">
									<span>
										<i className="fa-solid fa-bolt"></i>
									</span>
									<span>Gym</span>
								</div>
								<div className="bg-gray-100 py-2 px-4 rounded flex items-center gap-2">
									<span>
										<i className="fa-solid fa-bolt"></i>
									</span>
									<span>Dual Occupancy</span>
								</div>
							</div>
						</section>
					</div>
					<Offers />
					<PropertyDescription description={hotelData?.hotelDescription} />
					<WhatYouGet
						amenities={hotelData?.amenities}
						includedBills={hotelData?.includedBills}
					/>
					<RoomType rooms={hotelData?.rooms} />
					<CancellationPolicies />
					<PaymentPolicies />
					<LocationMap />
					<Faq />
					<Reviews />
				</div>
			</main>

			<FooterComponent />
		</>
	)
}
