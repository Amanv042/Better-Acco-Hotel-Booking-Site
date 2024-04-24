import { Link, useParams, useSearchParams } from "react-router-dom"
import HotelStatus from "../HotelStatus/HotelStatus"
import FavoriteButton from "../FavoriteButton/FavoriteButton"
import { useEffect, useState } from "react"

export default function HotelCard({ hotel }) {
	const [avgRating, setAvgRating] = useState()

	useEffect(() => {
		const ratingLength = hotel.rating.length
		const rating = hotel.rating.reduce((acc, curr) => {
			return acc + +curr
		}, 0)
		setAvgRating(rating / ratingLength)
	}, [])

	return (
		<>
			<div className="border overflow-hidden rounded-lg lg:flex grid items-center">
				<div className="aspect-square w-full  lg:w-[500px] relative">
					<img
						className="h-full w-full object-cover"
						src={hotel?.images[0]?.imagePath}
						alt=""
					/>
					<div className="absolute top-4 px-4 z-10 flex justify-between w-full">
						<HotelStatus type="popular">Popular</HotelStatus>
						<FavoriteButton />
					</div>
				</div>

				<div className="flex flex-col w-full p-4 lg:p-4  justify-between gap-2">
					<h2 className="text-3xl text-center lg:text-left font-semibold">
						{hotel.hotelName}
					</h2>
					<p>
						{hotel?.address?.street}, {hotel?.address?.city}, {hotel?.address?.state},{" "}
						{hotel?.address?.country}
					</p>

					<div className="lg:flex justify-between items-center ">
						<div className="lg:flex flex-col gap-2">
							<div className="flex lg:flex-row flex-col gap-4">
								<p>
									{avgRating === Infinity
										? ""
										: (Math.round(avgRating) === 1 && "⭐") ||
										  (Math.round(avgRating) === 2 && "⭐⭐") ||
										  (Math.round(avgRating) === 3 && "⭐⭐⭐") ||
										  (Math.round(avgRating) === 4 && "⭐⭐⭐⭐") ||
										  (Math.round(avgRating) === 5 && "⭐⭐⭐⭐⭐")}
									{isNaN(Math.round(avgRating)) ? "No reviews" : Math.round(avgRating)}{" "}
									star Hotel
								</p>
								<p className="hidden lg:block">&#8226;</p>
								<p>20+ Amenities</p>
							</div>
							<div className="flex items-center gap-2">
								<p className="border w-14 aspect-square rounded-md grid place-items-center">
									{isNaN(avgRating) ? "0" : Math.round(avgRating)}
								</p>
								<p> Very Good</p>
								<p>{hotel?.reviews?.length} reviews</p>
							</div>
						</div>
						<div className="lg:text-right items-end flex lg:flex-col text-sm lg:text-[1em] gap-2 my-2 lg:m-0">
							<p>starting from</p>
							<p className="text-[var(--theme-clr)] lg:text-3xl font-semibold text-lg">
								{hotel?.price}/week
							</p>
							<p>excl. tax</p>
						</div>
					</div>

					<hr />

					<div className="flex gap-2">
						<Link
							to={`/property/${hotel._id}`}
							className="bg-[var(--theme-clr)] w-full rounded-md font-semibold text-white grid place-items-center py-4"
						>
							View Place
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
