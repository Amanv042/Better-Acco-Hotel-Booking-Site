export default function SelectMenu({
	defaultOptionTitle,
	label,
	className,
	onValue,
	disabled,
	children,
}) {
	return (
		<label className={`form-control w-full ${className}`}>
			{label && (
				<div className="label">
					<span className="label-text">{label}</span>
				</div>
			)}
			<select
				className="select select-bordered outline-none focus:outline-none w-full"
				onChange={onValue}
				disabled={disabled}
			>
				<option hidden defaultValue>
					{defaultOptionTitle}
				</option>
				{children}
			</select>
		</label>
	)
}
