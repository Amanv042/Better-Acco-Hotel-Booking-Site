export default function CancellationPolicies() {
	return (
		<div className="border border-[var(--theme-clr)] px-8 py-6 rounded-2xl flex flex-col gap-4">
			<h2 className="font-bold lg:text-2xl mb-4">Cancellation Policies (4)</h2>
			<div className="flex items-center justify-between">
				<p className="flex gap-2 items-center">
					<span className="w-8 h-8 grid place-content-center rounded-full border border-[var(--theme-clr)]">
						1
					</span>
					<span className="font-semibold">Cooling Off Period</span>
				</p>
				<button className="font-semibold text-[var(--theme-clr)]">View</button>
			</div>
			<hr />
			<div className="flex items-center justify-between">
				<p className="flex gap-2 items-center">
					<span className="w-8 h-8 grid place-content-center rounded-full border border-[var(--theme-clr)]">
						2
					</span>
					<span className="font-semibold">No Visa No Pay</span>
				</p>
				<button className="font-semibold text-[var(--theme-clr)]">View</button>
			</div>
			<hr />
			<div className="flex items-center justify-between">
				<p className="flex gap-2 items-center">
					<span className="w-8 h-8 grid place-content-center rounded-full border border-[var(--theme-clr)]">
						3
					</span>
					<span className="font-semibold">No Place No Pay</span>
				</p>
				<button className="font-semibold text-[var(--theme-clr)]">View</button>
			</div>
			<hr />
			<div className="flex items-center justify-between">
				<p className="flex gap-2 items-center">
					<span className="w-8 h-8 grid place-content-center rounded-full border border-[var(--theme-clr)]">
						4
					</span>
					<span className="font-semibold">Extenuating Circumstances</span>
				</p>
				<button className="font-semibold text-[var(--theme-clr)]">View</button>
			</div>
		</div>
	)
}
