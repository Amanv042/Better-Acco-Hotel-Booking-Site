import LinkButton from "../LinkButton/LinkButton"
import "./PartnerBanner.css"

export default function PartnerBanner() {
	return (
		<>
			<div className="partnerBannerContainer relative overflow-hidden flex items-end  h-[500px] w-full custom-container my-[1rem]">
				<div className="bannerContainer bg-[var(--theme-clr)] h-[380px] w-full grid grid-cols-3 items-center rounded-[2.5rem] ">
					<img
						src="/images/partnerBanner.svg"
						alt="image"
						className="absolute bottom-0 left-[3rem] h-[450px]"
					/>
					<div className="justHere"></div>
					<div className="content ml-[7rem] text-center">
						<div className="font-bold text-white text-[2.25em]">Partner with us</div>
						<div className="text-white">
							At betteracco, we offer seamless booking process and a robust sales
							support.
						</div>
					</div>
					<div className="text-center">
						<LinkButton className="!bg-white !text-black" to="/">
							Register Now
						</LinkButton>
					</div>
				</div>
			</div>
		</>
	)
}
