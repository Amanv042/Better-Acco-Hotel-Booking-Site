import { Link, useNavigate } from "react-router-dom"
import Banner from "../../components/Banner/Banner"
import Header from "../../components/Header/Header"
import ModernInput from "../../components/ModernInput/ModernInput"

export default function Partner() {
	const navigate = useNavigate()
	return (
		<>
			<Header />
			<main>
				<section>
					<Banner>
						<div className="custom-container">
							<div className="aboutBannerContainer grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center lg:h-[600px]">
								<div className=" bg-[#0003] grid gap-4 text-white lg:w-[500px]  p-8 rounded-2xl backdrop-blur-[5px] shadow-md border border-[#ffffff4b] ">
									<h1 className="font-bold text-[1.6em]">Partners with us</h1>
									<p>A smarter way to fill your room</p>
									<ul>
										<li className="flex gap-2 items-center ">
											<span className="text-[var(--theme-clr)]">
												<i className="fa-regular fa-circle-check"></i>
											</span>
											<span>Zero Listing Fees</span>
										</li>
										<li className="flex gap-2 items-center ">
											<span className="text-[var(--theme-clr)]">
												<i className="fa-regular fa-circle-check"></i>
											</span>
											<span>Expand your accommodation portfolio</span>
										</li>
										<li className="flex gap-2 items-center ">
											<span className="text-[var(--theme-clr)]">
												<i className="fa-regular fa-circle-check"></i>
											</span>
											<span>Enjoy personalized support and valuable insights</span>
										</li>
									</ul>
									<button className="bg-[--theme-clr] w-full rounded-full py-2">
										Partner with us
									</button>
									<hr />
									<p>Already Registered?</p>
									<button
										onClick={() => navigate("/login")}
										className="text-[--theme-clr] bg-white w-full rounded-full py-2"
									>
										Login
									</button>
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

				<section>
					
				</section>
			</main>
		</>
	)
}
