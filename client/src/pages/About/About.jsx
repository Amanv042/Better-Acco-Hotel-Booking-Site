import { Link } from "react-router-dom"
import FooterComponent from "../../components/FooterComponent/FooterComponent"
import Header from "../../components/Header/Header"
import Testimonial from "../../components/Testimonial/Testimonial"
import TrustedCompanies from "../../components/TrustedCompanies/TrustedCompanies"
import Banner from "../../components/Banner/Banner"
import Features from "../../components/Features/Features"
import ModernInput from "../../components/ModernInput/ModernInput"

export default function About() {
	return (
		<>
			<Header />
			<img
				src="images/gradient.svg"
				alt=""
				width={"100%"}
				className="absolute -top-[100px] w-full -z-10"
			/>
			<main>
				{/* Hero Banner */}
				<section>
					<Banner>
						<div className="custom-container">
							<div className="aboutBannerContainer grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center lg:h-[600px]">
								<div className=" bg-[#0003] text-white lg:w-[500px]  p-8 rounded-2xl backdrop-blur-[5px] shadow-md border border-[#ffffff4b] ">
									<h1 className="font-bold text-[1.6em]">About US</h1>
									<p>A smarter way to fill your room</p>
									<ul>
										<li className="flex gap-2 items-center ">
											<span className="text-[var(--theme-clr)]">
												<i className="fa-regular fa-circle-check"></i>
											</span>
											<span>Vision</span>
										</li>
										<li className="flex gap-2 items-center ">
											<span className="text-[var(--theme-clr)]">
												<i className="fa-regular fa-circle-check"></i>
											</span>
											<span>Mission</span>
										</li>
										<li className="flex gap-2 items-center ">
											<span className="text-[var(--theme-clr)]">
												<i className="fa-regular fa-circle-check"></i>
											</span>
											<span>Our Approach</span>
										</li>
									</ul>
								</div>
								<div className="aboutBannerForm">
									<div className="bg-white p-8 px-12 rounded-2xl grid gap-8 shadow-xl">
										<div className="flex gap-2">
											<h1 className="w-6 h-fit grid place-items-center text-white rounded-full aspect-square bg-[var(--theme-clr)]">
												<i className="fa-solid fa-bolt"></i>
											</h1>
											<p className="flex flex-col">
												<span className="font-bold text-[1.1em]">
													Let us assist you for free!
												</span>
												<span>Save at least 7 hours with our experts help</span>
											</p>
										</div>
										<form className="grid gap-4">
											<ModernInput type="text" name="name" placeHolder={"Name"} />
											<ModernInput type="email" name="email" placeHolder={"Email"} />
											<ModernInput type="text" name="phone" placeHolder={"Phone Number"} />
											<ModernInput
												type="text"
												name="university"
												placeHolder={"University"}
											/>
											<button className="bg-[var(--theme-clr)] flex items-center w-full rounded-full justify-center py-3">
												<span className="w-6 h-fit grid place-items-center text-white rounded-full aspect-square">
													<i className="fa-solid fa-bolt"></i>
												</span>
												<span className="font-semibold text-white">Get Expert Help!</span>
											</button>
											<p className="w-[80%] text-center mx-auto">
												By submitting you agree to our <strong>terms</strong> and{" "}
												<strong>privacy policy</strong>.
											</p>
										</form>
									</div>
								</div>
							</div>
						</div>
					</Banner>
				</section>

				<Features />

				<section className="py-8">
					<div className="custom-container ">
						<div className="lg:w-[70%] mx-auto gap-8 grid place-items-center">
							<h1 className="lg:text-[1.2em] font-semibold">
								Borders are the worst thing to happen humanity after natural calamities
							</h1>
							<p className="text-center">
								Imagine a world without borders. The world looks a lot more unified on
								old maps. Maps of today look more like mosaics, like the fragile Earth
								fell off a shelf and had to have its broken bits pieced back together.
							</p>
							<h2 className="font-bold lg:text-[2.5em]">
								We believe in a border-free world!
							</h2>
						</div>
					</div>
				</section>

				{/* Approach Section */}
				<section className="bg-[#f5f5f7] py-14">
					<div className="custom-container">
						<div className="grid place-content-center justify-items-center gap-4">
							<h1 className="text-center font-bold lg:text-[2em]">Our Approach</h1>
							<div className="grid lg:grid-cols-3 gap-4">
								<div className="approachCard bg-white rounded-2xl h-[280px] px-4 grid place-content-center gap-4 justify-items-center">
									<div className="bg-[var(--theme-clr)] w-12 aspect-square text-white rounded-full grid place-content-center">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<h2 className="font-bold lg:text-[1.8em]">Easy Search</h2>
									<p className="lg:w-72 text-center">
										Wide-selection of accomodations that fit your prefernces.
									</p>
								</div>
								<div className="approachCard bg-white rounded-2xl h-[280px] px-4 grid place-content-center gap-4 justify-items-center">
									<div className="bg-[var(--theme-clr)] w-12 aspect-square text-white rounded-full grid place-content-center">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<h2 className="font-bold lg:text-[1.8em]">Easy Search</h2>
									<p className="lg:w-72 text-center">
										Wide-selection of accomodations that fit your prefernces.
									</p>
								</div>
								<div className="approachCard bg-white rounded-2xl h-[280px] px-4 grid place-content-center gap-4 justify-items-center">
									<div className="bg-[var(--theme-clr)] w-12 aspect-square text-white rounded-full grid place-content-center">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<h2 className="font-bold lg:text-[1.8em]">Easy Search</h2>
									<p className="lg:w-72 text-center">
										Wide-selection of accomodations that fit your prefernces.
									</p>
								</div>
							</div>
							<Link
								to="/"
								className="block w-fit border border-[var(--theme-clr)] rounded-full py-2 px-4 hover:bg-[var(--theme-clr)] hover:text-white text-[var(--theme-clr)] transition-all duration-300"
							>
								Explore Best Rooms For You
							</Link>
						</div>
					</div>
				</section>
				<TrustedCompanies />
				<Testimonial />
			</main>
			<FooterComponent />
		</>
	)
}
