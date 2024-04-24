import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import FooterComponent from "../../components/FooterComponent/FooterComponent"

export default function Blogs() {
	return (
		<>
			<Header />

			{/* Hero Banner */}
			<section>
				<Banner>
					<div className="custom-container ">
						<div className="aboutBannerContainer grid grid-cols-1 lg:grid-cols-2 place-items-center lg:h-[600px]">
							<div className=" bg-[#0003] text-white lg:w-[500px] md:w-[400px] sm-[400px] p-8 rounded-2xl backdrop-blur-[5px] shadow-md border border-[#ffffff4b] ">
								<h1 className="font-bold text-[1.6em]">In the NEWS</h1>
								<p>Your Guide to the Best Student Accommodations</p>
								<ul>
									<li className="flex gap-2 items-center ">
										<span className="text-[var(--theme-clr)]">
											<i className="fa-regular fa-circle-check"></i>
										</span>
										<span>Verified Listing</span>
									</li>
									<li className="flex gap-2 items-center ">
										<span className="text-[var(--theme-clr)]">
											<i className="fa-regular fa-circle-check"></i>
										</span>
										<span>Simplest Bookings</span>
									</li>
									<li className="flex gap-2 items-center ">
										<span className="text-[var(--theme-clr)]">
											<i className="fa-regular fa-circle-check"></i>
										</span>
										<span>Value For Money</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</Banner>
			</section>

			<h1 className="font-bold lg:text-[4em] my-10 text-center">
				Featured Explore
			</h1>

			<section className="dark:bg-gray-800 dark:text-gray-100">
				<div className="custom-container p-6 mx-auto space-y-6 sm:space-y-12">
					<a
						rel="noopener noreferrer"
						href="#"
						className="block bg-[#f7f7f7] rounded overflow-hidden max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 hover:scale-105 transition-transform"
					>
						<img
							src="https://source.unsplash.com/random/480x360"
							alt=""
							className="object-cover w-full h-64  sm:h-96 lg:col-span-7 dark:bg-gray-500"
						/>
						<div className="p-6 space-y-2 lg:col-span-5">
							<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
								Noster tincidunt reprimique ad pro
							</h3>
							<span className="text-xs dark:text-gray-400">February 19, 2021</span>
							<p>
								Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece
								fuisset, eos affert putent doctus id.
							</p>
						</div>
					</a>
					<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						<a
							rel="noopener noreferrer"
							href="#"
							className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 bg-[#f7f7f7] rounded overflow-hidden hover:scale-105 transition-transform"
						>
							<img
								role="presentation"
								className="object-cover w-full rounded h-44 dark:bg-gray-500"
								src="https://source.unsplash.com/random/480x360?1"
							/>
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
									In usu laoreet repudiare legendos
								</h3>
								<span className="text-xs dark:text-gray-400">January 21, 2021</span>
								<p>
									Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur,
									ex has tantas percipit perfecto. At per tempor albucius perfecto, ei
									probatus consulatu patrioque mea, ei vocent delicata indoctum pri.
								</p>
							</div>
						</a>
						<a
							rel="noopener noreferrer"
							href="#"
							className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 bg-[#f7f7f7] rounded overflow-hidden hover:scale-105 transition-transform"
						>
							<img
								role="presentation"
								className="object-cover w-full rounded h-44 dark:bg-gray-500"
								src="https://source.unsplash.com/random/480x360?2"
							/>
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
									In usu laoreet repudiare legendos
								</h3>
								<span className="text-xs dark:text-gray-400">January 22, 2021</span>
								<p>
									Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur,
									ex has tantas percipit perfecto. At per tempor albucius perfecto, ei
									probatus consulatu patrioque mea, ei vocent delicata indoctum pri.
								</p>
							</div>
						</a>
						<a
							rel="noopener noreferrer"
							href="#"
							className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 bg-[#f7f7f7] rounded overflow-hidden hover:scale-105 transition-transform"
						>
							<img
								role="presentation"
								className="object-cover w-full rounded h-44 dark:bg-gray-500"
								src="https://source.unsplash.com/random/480x360?3"
							/>
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
									In usu laoreet repudiare legendos
								</h3>
								<span className="text-xs dark:text-gray-400">January 23, 2021</span>
								<p>
									Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur,
									ex has tantas percipit perfecto. At per tempor albucius perfecto, ei
									probatus consulatu patrioque mea, ei vocent delicata indoctum pri.
								</p>
							</div>
						</a>
						<a
							rel="noopener noreferrer"
							href="#"
							className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block bg-[#f7f7f7] rounded overflow-hidden hover:scale-105 transition-transform"
						>
							<img
								role="presentation"
								className="object-cover w-full rounded h-44 dark:bg-gray-500"
								src="https://source.unsplash.com/random/480x360?4"
							/>
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
									In usu laoreet repudiare legendos
								</h3>
								<span className="text-xs dark:text-gray-400">January 24, 2021</span>
								<p>
									Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur,
									ex has tantas percipit perfecto. At per tempor albucius perfecto, ei
									probatus consulatu patrioque mea, ei vocent delicata indoctum pri.
								</p>
							</div>
						</a>
						<a
							rel="noopener noreferrer"
							href="#"
							className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block bg-[#f7f7f7] rounded overflow-hidden hover:scale-105 transition-transform"
						>
							<img
								role="presentation"
								className="object-cover w-full rounded h-44 dark:bg-gray-500"
								src="https://source.unsplash.com/random/480x360?5"
							/>
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
									In usu laoreet repudiare legendos
								</h3>
								<span className="text-xs dark:text-gray-400">January 25, 2021</span>
								<p>
									Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur,
									ex has tantas percipit perfecto. At per tempor albucius perfecto, ei
									probatus consulatu patrioque mea, ei vocent delicata indoctum pri.
								</p>
							</div>
						</a>
						<a
							rel="noopener noreferrer"
							href="#"
							className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block bg-[#f7f7f7] rounded overflow-hidden hover:scale-105 transition-transform"
						>
							<img
								role="presentation"
								className="object-cover w-full rounded h-44 dark:bg-gray-500"
								src="https://source.unsplash.com/random/480x360?6"
							/>
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
									In usu laoreet repudiare legendos
								</h3>
								<span className="text-xs dark:text-gray-400">January 26, 2021</span>
								<p>
									Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur,
									ex has tantas percipit perfecto. At per tempor albucius perfecto, ei
									probatus consulatu patrioque mea, ei vocent delicata indoctum pri.
								</p>
							</div>
						</a>
					</div>
					<div className="flex justify-center">
						<button
							type="button"
							className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400 border"
						>
							Load more posts...
						</button>
					</div>
				</div>
			</section>

			<FooterComponent />
		</>
	)
}
