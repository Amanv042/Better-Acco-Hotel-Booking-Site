export default function PropertyDescription({ description }) {
	return (
		<div className="border border-[var(--theme-clr)] px-8 py-6 rounded-2xl flex flex-col gap-4">
			<h2 className="font-bold text-2xl">Description</h2>
			<p className="text-justify text-[1.1em] font-medium">{description}</p>
			{/* <button className="flex item-center gap-4 text-[var(--theme-clr)]">
				{" "}
				<span>View full description</span>{" "}
				<span>
					<i className="fa-solid fa-chevron-right"></i>
				</span>{" "}
			</button> */}
		</div>
	)
}
