function ModernInput({ name, placeHolder, type }) {
	return (
		<>
			<label
				htmlFor={name}
				className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
			>
				<input
					type={type}
					id={name}
					className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  py-3 px-2"
					placeholder={placeHolder}
				/>

				<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
					{placeHolder}
				</span>
			</label>
		</>
	)
}

export default ModernInput
