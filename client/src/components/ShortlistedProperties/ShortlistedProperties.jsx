import { Link } from "react-router-dom"
import LinkButton from "../LinkButton/LinkButton"
import ShortlistedCard from "../ShortlistedCard/ShortlistedCard"

export default function ShortlistedProperties() {
	return (
		<section>
			<div className="custom-container">
				<div className="shortListingContainer bg-white shadow-md py-4 px-6 rounded-xl">
					<div className="flex justify-between items-center">
						<h1 className="font-bold text-[1em] lg:text-[1.5em] ">
							Shortlisted Properties
						</h1>
						<Link className="font-bold text-[var(--theme-clr)]" to="/">
							View All
						</Link>
					</div>
					<div className="grid grid-cols-3 lg:grid-cols-8 md:grid-cols-4 gap-4 place-content-center">
						<ShortlistedCard />
						<ShortlistedCard />
						<ShortlistedCard />
						<ShortlistedCard />
						<ShortlistedCard />
						<ShortlistedCard />
						<ShortlistedCard />
					</div>
				</div>
			</div>
		</section>
	)
}
