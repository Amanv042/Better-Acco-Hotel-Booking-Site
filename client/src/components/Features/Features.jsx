export default function Features() {
	return (
		<div>
			<div className="detailsContainer custom-container lg:my-[100px]">
				<div className="grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
					<div className="bg-white shadow-2xl rounded-[2rem] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 place-items-center col-span-1 lg:col-span-2 md:col-span-2 py-2">
						<div className="avatar-group -space-x-6 rtl:space-x-reverse ">
							<div className="avatar">
								<div className="w-12">
									<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
								</div>
							</div>
							<div className="avatar">
								<div className="w-12">
									<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
								</div>
							</div>
							<div className="avatar">
								<div className="w-12">
									<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
								</div>
							</div>
							<div className="avatar placeholder">
								<div className="w-12 bg-neutral text-neutral-content">
									<span>+99</span>
								</div>
							</div>
						</div>
						<p className="font-semibold text-[1.8em] lg:text-[2.8em] text-center">
							72k+ Happy Student
						</p>
					</div>
					<div className="bg-white shadow-2xl rounded-[2rem] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 place-items-center py-2">
						<div className="w-24 aspect-square rounded-[100vh] overflow-hidden">
							<img
								src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
								alt=""
							/>
						</div>
						<p className="font-semibold text-[1.8em]">
							<i className="fa-solid fa-bed"></i> 1.5M+ Beds
						</p>
					</div>
					<div className="bg-white shadow-2xl rounded-[2rem] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 place-items-center py-2">
						<div className="w-24 aspect-square rounded-[100vh] overflow-hidden">
							<img
								src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
								alt=""
							/>
						</div>
						<p className="font-semibold text-[1.8em]">
							<i className="fa-solid fa-earth-americas"></i> 10+ Countries
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
