export default function WhatYouGet({ includedBills, amenities }) {
	return (
		<div className="border border-[var(--theme-clr)] px-8 py-6 rounded-2xl flex flex-col gap-4">
			<h2 className="font-bold text-2xl">What will you get</h2>
			<div className="grid gap-4">
				<div>
					<h3 className="font-semibold text-lg">Bills Included</h3>
					<div className="grid grid-cols-1 lg:grid-cols-3">
						{includedBills &&
							Object.entries(includedBills).map(([key, value]) => (
								<button
									className=" w-fit py-2 px-4 rounded flex gap-2 item-center"
									key={key}
								>
									{value ? (
										<span className="text-[--theme-clr]">
											<i className="fa-regular fa-circle-check"></i>
										</span>
									) : (
										<span className="text-red-400">
											<i className="fa-regular fa-circle-xmark"></i>
										</span>
									)}
									<span>{key}</span>
								</button>
							))}
					</div>
				</div>
				<hr />
				<div>
					<h3 className="font-semibold text-lg">Common Amenities</h3>
					<div className="grid grid-cols-1 lg:grid-cols-3">
						{amenities &&
							Object.entries(amenities).map(([key, value]) => (
								<button
									className=" w-fit py-2 px-4 rounded flex gap-2 item-center"
									key={key}
								>
									{value ? (
										<span className="text-[--theme-clr]">
											<i className="fa-regular fa-circle-check"></i>
										</span>
									) : (
										<span className="text-red-400">
											<i className="fa-regular fa-circle-xmark"></i>
										</span>
									)}
									<span>{key}</span>
								</button>
							))}
					</div>
				</div>
			</div>
		</div>
	)
}
