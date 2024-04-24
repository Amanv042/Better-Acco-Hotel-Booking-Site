import FooterComponent from "../../components/FooterComponent/FooterComponent"
import Header from "../../components/Header/Header"
import Features from "../../components/Features/Features"
import TrustedCompanies from "../../components/TrustedCompanies/TrustedCompanies"

import "./Homepage.css"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Autoplay, Navigation, EffectFade } from "swiper/modules"
import { Link } from "react-router-dom"
import AirBnbSearchbar from "../../components/AirBnbSearchbar/AirBnbSearchbar"
import Testimonial from "../../components/Testimonial/Testimonial"
import CardScroller from "../../components/CardScroller/CardScroller"
import Loader from "../../components/Loader/Loader"
import { useState } from "react"

export default function Homepage() {
	const [isLoading, setIsLoading] = useState(false)
	return (
		<>
			<Header />

			{isLoading ? (
				<Loader />
			) : (
				<>
					<img
						src="images/gradient.svg"
						alt=""
						width={"100%"}
						className="absolute w-full -top-[30px] -z-10"
					/>

					<main className="grid lg:gap-14 md:gap-8">
						<section className="my-10">
							<div className="heroContainer custom-container ">
								<div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 place-items-center gap-8">
									<div className="heroDetails grid gap-4">
										<div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 place-items-center">
											<div className="flex items-center gap-2">
												<span>
													<i className="fa-solid fa-certificate text-[var(--theme-clr)] text-[1.1em]"></i>
												</span>{" "}
												<span className="text-[0.5em] lg:text-[1em]">
													Verified Listings
												</span>
											</div>
											<div className="flex items-center gap-2">
												<span>
													<i className="fa-solid fa-handshake-simple text-[var(--theme-clr)] text-[1.1em]"></i>
												</span>{" "}
												<span className="text-[0.5em] lg:text-[1em]">
													Simplest Bookings
												</span>
											</div>
											<div className="flex items-center gap-2">
												<span>
													<i className="fa-solid fa-wallet text-[var(--theme-clr)] text-[1.1em]"></i>
												</span>{" "}
												<span className="text-[0.5em] lg:text-[1em]">Value For Money</span>
											</div>
										</div>
										<h1 className="text-[2em] text-center lg:text-left lg:text-[5em] md:text-[4em] sm:text-[3em] font-bold">
											Book a room that you&apos;ll call home..!
										</h1>
										<p className="text-center lg:text-left ">
											Book student accommodations near top universities and cities across
											the globe.
										</p>
										<div className="flex flex-col lg:flex-row md:flex-row justify-center lg:justify-start gap-4">
											<Link
												to=""
												className="bg-[var(--theme-clr)] py-2 px-4 text-white text-center rounded-[100vh] transition-all"
											>
												Explore Rooms
											</Link>
											<Link
												to=""
												className="border border-[var(--theme-clr)] py-2 px-4 text-center rounded-[100vh] hover:bg-[var(--theme-clr)] hover:text-white transition-all"
											>
												Find My Kind Room
											</Link>
										</div>
									</div>
									<div className="heroSlider hidden lg:block md:hidden">
										<div className="carousel2 hidden lg:grid">
											<Swiper
												spaceBetween={30}
												effect={"fade"}
												autoplay={{
													delay: 2000,
													disableOnInteraction: false,
												}}
												navigation={true}
												modules={[Autoplay, EffectFade, Navigation]}
												className="mySwiper"
											>
												<SwiperSlide>
													<div>
														<img
															className="w-full h-full object-cover"
															src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
															alt=""
														/>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div>
														<img
															className="w-full h-full object-cover"
															src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
															alt=""
														/>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div>
														<img
															className="w-full h-full object-cover"
															src="https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
															alt=""
														/>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div>
														<img
															className="w-full h-full object-cover"
															src="https://images.pexels.com/photos/2029719/pexels-photo-2029719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
															alt=""
														/>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div>
														<img
															className="w-full h-full object-cover"
															src="https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
															alt=""
														/>
													</div>
												</SwiperSlide>
											</Swiper>
										</div>
									</div>
								</div>
							</div>
						</section>
						<AirBnbSearchbar isLoading={setIsLoading} />
						<Features />
						<TrustedCompanies />
						<Testimonial />
					</main>
					<CardScroller />

					<FooterComponent />
				</>
			)}
		</>
	)
}
