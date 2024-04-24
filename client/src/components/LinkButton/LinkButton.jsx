import { Link } from "react-router-dom"

export default function LinkButton({ to, className, children }) {
	return (
		<>
			<Link
				className={`w-fit bg-[var(--theme-clr)] text-white py-3 px-8 rounded-[100vh] ${className}`}
				to={to}
			>
				{children}
			</Link>
		</>
	)
}
