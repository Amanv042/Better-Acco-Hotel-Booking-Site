import { useParams } from "react-router-dom"

export default function Offers() {
	return (
		<div className="border border-[var(--theme-clr)] px-8 py-6 rounded-2xl flex flex-col gap-4">
			<h2 className="font-bold text-2xl mb-4">Offers (2)</h2>
			<div className="flex items-center justify-between">
				<p className="flex gap-2 items-center">
					<span className="h-[30px] aspect-square rounded-full grid place-content-center border border-[var(--theme-clr)]">
						1
					</span>
					<span>Exclusive Cashback Of GBP 50 For Referring A Friend On Amber!</span>
				</p>
				<button className="font-semibold text-[var(--theme-clr)]">Available</button>
			</div>
			<hr />
			<div className="lg:flex items-center justify-between">
				<p className="flex gap-2 items-center justify-between">
					{" "}
					<span className="h-[30px] aspect-square rounded-full grid place-content-center border border-[var(--theme-clr)]">
						2
					</span>{" "}
					<span>Early Bird Offer! Save Up to £200 on your moving charges!</span>{" "}
				</p>{" "}
				<button className="font-semibold text-[var(--theme-clr)]">Available</button>
			</div>
		</div>
	)
}
