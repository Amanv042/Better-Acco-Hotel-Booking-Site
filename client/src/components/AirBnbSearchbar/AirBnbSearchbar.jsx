import { useEffect, useState } from "react"
import countries from "../../Services/countriesData"
import SelectMenu from "../SelectMenu/SelectMenu"

export default function AirBnbSearchbar({ isLoading }) {
	const [price, setPrice] = useState(500)
	const [data, setData] = useState([])
	const [country, setCountry] = useState("")
	const [state, setState] = useState("")
	const [city, setCity] = useState("")

	useEffect(() => {
		isLoading(true)
		setData(countries)
		isLoading(false)
	}, [country, state, city])

	return (
		<div className="airBnbSearchContainer">
			<div className="custom-container">
				<div className="searchbarContainer  gap-2 grid lg:grid-cols-4 rounded bg-white lg:rounded-[100vh] py-6 px-6 place-items-center shadow-2xl">
					<SelectMenu
						className="block lg:hidden"
						defaultOptionTitle="Pick Country"
						onValue={(e) => setCountry(e.target.value)}
					>
						{data?.map(({ name, emoji }) => {
							return (
								<option key={name} value={name}>
									{emoji} {name}
								</option>
							)
						})}
					</SelectMenu>
					<SelectMenu
						defaultOptionTitle="Pick Country"
						className="hidden lg:block md-hidden"
						onValue={(e) => setCountry(e.target.value)}
					>
						{data?.map(({ name, emoji }) => {
							return (
								<option key={name} value={name}>
									{name}
								</option>
							)
						})}
					</SelectMenu>

					<SelectMenu
						defaultOptionTitle="Pick State	"
						onValue={(e) => setState(e.target.value)}
						disabled={!country}
					>
						{data
							?.filter(({ name }) => {
								return name === country
							})
							.map(({ states }) => {
								if (states.length < 1)
									return (
										<option value="" key={0}>
											No State Found
										</option>
									)
								return states.map(({ name }) => {
									return (
										<option value={name} key={name}>
											{name}
										</option>
									)
								})
							})}
					</SelectMenu>
					<SelectMenu
						defaultOptionTitle="Pick City	"
						onValue={(e) => setCity(e.target.value)}
						disabled={!state}
					>
						{data
							?.filter((c) => {
								return c?.name === country
							})
							?.map((country) => {
								return country?.states
									?.filter((c) => {
										return c?.name === state
									})
									?.map((s, i) => {
										if (s?.cities?.length < 1)
											return (
												<option value="" key={i}>
													No City Found
												</option>
											)
										return s?.cities?.map((city, i) => {
											return (
												<option value={city?.name} key={i}>
													{city?.name}
												</option>
											)
										})
									})
							})}
					</SelectMenu>
					<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
						<input
							type="text"
							placeholder="min price"
							className="w-full outline-none border border-[var(--theme-clr)] rounded-lg px-3 py-2.5 focus:border-[black] transition-all duration-300"
						/>
						<input
							type="text"
							placeholder="max price"
							className="w-full  outline-none border border-[var(--theme-clr)] rounded-lg px-3 py-2.5 focus:border-[black] transition-all duration-300"
						/>
						<button className="border text-white py-2 lg:w-14 md:w-14 w-full lg:aspect-square md:aspect-square  grid place-items-center bg-[var(--theme-clr)] lg:rounded-full md:rounded-full  col-span-2 lg:col-span-1 rounded-lg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-6 h-6 opacity-70 text-white hidden lg:block md:block"
							>
								<path
									fillRule="evenodd"
									d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="lg:hidden md:hidden">Search</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
