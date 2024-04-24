export default function HotelStatus({ type, className, children }) {
	return (
		<>
			<p
				className={`${className} ${
					type === "popular" && "bg-[#FFE1E1]   text-[#ff1111]"
				} 
				${type === "newListing" && "bg-[#D7EEFF]   text-[#119BFF]"} 
				${
					type === "discount" && "bg-[#F1FFF1]   text-[#00CE3A]"
				} py-2 px-8 rounded-full `}
			>
				{children}
			</p>
		</>
	)
}
