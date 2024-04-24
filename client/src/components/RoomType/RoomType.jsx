export default function RoomType({ rooms }) {
	return (
		<div className="border border-[var(--theme-clr)] px-8 py-6 rounded-2xl flex flex-col gap-4">
			<h2>Room Types (6)</h2>
			<hr />
			<div>
				<div className="flex justify-between items-center py-4">
					<h2 className="font-bold lg:text-2xl md:text-2xl text-lg">Common Room</h2>
					<button className="font-bold text-[var(--theme-clr)] border px-4 py-2 rounded-full border-[var(--theme-clr)] hover:text-white hover:bg-[var(--theme-clr)] transition-all duration-200">
						Book now
					</button>
				</div>
				<p className="text-justify">{rooms?.common?.description}</p>
				<div>
					<h3 className="font-semibold text-lg">Common Amenities</h3>
					<div className="grid grid-cols-1 lg:grid-cols-3">
						{rooms &&
							Object.entries(rooms?.common?.amenities).map(([key, value]) => (
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
			<div>
				<div className="flex justify-between items-center py-4">
					<h2 className="font-bold lg:text-2xl md:text-2xl text-lg">Premium Room</h2>
					<button className="font-bold text-[var(--theme-clr)] border px-4 py-2 rounded-full border-[var(--theme-clr)] hover:text-white hover:bg-[var(--theme-clr)] transition-all duration-200">
						Book now
					</button>
				</div>
				<p className="text-justify">{rooms?.premium?.description}</p>
				<div>
					<h3 className="font-semibold text-lg">Common Amenities</h3>
					<div className="grid grid-cols-1 lg:grid-cols-3">
						{rooms &&
							Object.entries(rooms?.premium?.amenities).map(([key, value]) => (
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
			<div>
				<div className="flex justify-between items-center py-4">
					<h2 className="font-bold lg:text-2xl md:text-2xl text-lg">Deluxe Room</h2>
					<button className="font-bold text-[var(--theme-clr)] border px-4 py-2 rounded-full border-[var(--theme-clr)] hover:text-white hover:bg-[var(--theme-clr)] transition-all duration-200">
						Book now
					</button>
				</div>
				<p className="text-justify">{rooms?.deluxe?.description}</p>
				<div>
					<h3 className="font-semibold text-lg">Common Amenities</h3>
					<div className="grid grid-cols-1 lg:grid-cols-3">
						{rooms &&
							Object.entries(rooms?.deluxe?.amenities).map(([key, value]) => (
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
