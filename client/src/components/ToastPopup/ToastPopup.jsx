export default function ToastPopup({ message, messageType, isActive }) {
	return (
		<div
			className={`fixed left-[50%] z-50 -translate-x-[50%] transition-all duration-200 origin-top top-8 ${
				isActive ? " scale-1" : " scale-0"
			}`}
		>
			<div
				className={` ${
					messageType === "error" && "bg-red-100  border-red-600 text-red-600"
				}  ${
					messageType === "success" && "bg-green-100 border-green-600 text-green-600"
				} ${
					messageType === "warning" &&
					"bg-yellow-100 border-yellow-600 text-yellow-600"
				} border py-2 px-4 text-nowrap lg:px-6 rounded-full grid place-items-center`}
			>
				<p className="flex gap-2 items-center">
					<i className="fa-solid fa-circle-info"></i>
					{message}
				</p>
			</div>
		</div>
	)
}
