import { Link } from "react-router-dom"
import ScrollCard from "../ScrollCard/ScrollCard"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

import "./CardScroller.css"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import { useEffect, useState } from "react"

// import required modules

const CardScroller = () => {
	const [hotelDetails, setHotelDetails] = useState([])
	useEffect(() => {
		async function hotelList() {
			let result = await fetch(
				`${import.meta.env.VITE_SERVER_BASE_URL}/hotelData/`
			)
			result = await result.json()
			setHotelDetails(result)
		}
		hotelList()
	}, [])
	return (
		<>
			<div className="custom-container flex  items-center mt-[5rem]  justify-between w-full">
				<div>
					<h2 className="text-[var(--theme-clr)] tracking-widest text-lg">
						CHECKOUT OUR NEW
					</h2>
					<div className="font-poppins">
						<p className="text-4xl font-bold my-4">Latest Listed Properties</p>
					</div>
					<p className="lg:w-3/4 text-gray-700">
						Explore affluent and cozy student homes near renowned universities and
						bustling capitals.
					</p>
				</div>

				<div>
					<Link
						to="/propertylisting"
						className="border border-[var(--theme-clr)] py-2 px-6 rounded-full text-[var(--theme-clr)] hover:bg-[var(--theme-clr)] hover:text-white transition-all duration-150"
					>
						<button>View All</button>
					</Link>
				</div>
			</div>

			<div className="ScrollCard-slider my-10">
				<div className="custom-container">
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						breakpoints={{
							420: {
								slidesPerView: 1,
								spaceBetween: 20,
							},
							640: {
								slidesPerView: 1,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 40,
							},
							1024: {
								slidesPerView: 4,
								spaceBetween: 50,
							},
						}}
						grabCursor={true}
						className="mySwiper"
					>
						{/* {hotelData.map((hotel) => {
							const index = uuidv4()
							return (
								<div key={index}>
									<SwiperSlide>
										<ScrollCard data={hotel} />
									</SwiperSlide>
								</div>
							)
						})} */}

						{hotelDetails.map((hotel) => {
							return (
								<SwiperSlide key={hotel?.hotelName}>
									<ScrollCard data={hotel} />
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
			</div>
		</>
	)
}

export default CardScroller
