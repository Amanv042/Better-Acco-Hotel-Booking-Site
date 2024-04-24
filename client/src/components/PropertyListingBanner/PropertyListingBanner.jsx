import LinkButton from "../LinkButton/LinkButton"

export default function PropertyListingBanner() {
	return (
		<>
			<div className="hero h-[450px] bg-[url(https://images.pexels.com/photos/458983/pexels-photo-458983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-center">
				<div className="hero-content custom-container text-center">
					<div className="max-w-4xl">
						<h1 className="text-[3em] font-bold text-white">
							List your properties efficiently with Better Acco.
						</h1>
						<button className="">
							<LinkButton
								className="hover:shadow-2xl transition-all duration-300 block my-5"
								to="/property-listing"
							>
								List Your Property
							</LinkButton>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
