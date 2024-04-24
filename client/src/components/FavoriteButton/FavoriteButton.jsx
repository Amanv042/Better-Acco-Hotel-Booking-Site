export default function FavoriteButton({ className }) {
	return (
		<button
			className={`bg-white w-10 aspect-square rounded-md cursor-pointer ${className}`}
		>
			{true && <i className="fa-solid fa-heart"></i>}
			{false && <i className="fa-regular fa-heart"></i>}
		</button>
	)
}
