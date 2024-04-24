export default function PreNavbar() {
	return (
		<div className="bg-[var(--theme-clr)] lg:py-3 md:py-3 sm:py-3 w-full">
			<div className="prenavbarContainer custom-container text-white">
				<div className="address flex items-center gap-2 ">
					<span>
						<i className="fa-solid fa-location-dot"></i>
					</span>
					<span className="text-[0.8em]">
						BetterAcco your perfect Accomodation Partner
					</span>
				</div>
			</div>
		</div>
	)
}
