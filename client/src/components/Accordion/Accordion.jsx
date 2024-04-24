export default function Accordion({
	accordionName,
	defaultChecked = false,
	children,
}) {
	return (
		<div>
			<div className="collapse collapse-arrow border rounded-md">
				<input type="radio" name="my-accordion-2" defaultChecked={defaultChecked} />
				<div className="collapse-title text-lg font-medium">{accordionName}</div>
				<div className="collapse-content">{children}</div>
			</div>
		</div>
	)
}
