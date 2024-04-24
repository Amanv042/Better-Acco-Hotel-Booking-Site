export default function SearchBar({ query, setQuery }) {
	return (
		<div className="searchbar-container flex items-center gap-2 rounded-full  ring-1 ring-gray-300  ps-4 px-1  lg:w-[400px] py-1 w-full">
			<input
				type="search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="rounded-full w-full outline-none py-2 px-2"
				placeholder="Search by city, university or Property"
			/>
			<div className="search-border rounded-full  bg-teal-200">
				<i className="fa-solid fa-magnifying-glass p-3"></i>
			</div>
		</div>
	)
}
