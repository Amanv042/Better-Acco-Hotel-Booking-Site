export default function LocationMap() {
	return (
		<div className="border border-[var(--theme-clr)] rounded-2xl overflow-hidden flex flex-col">
			<h2 className="font-bold text-2xl py-6 px-6">Nearby Locations and Map</h2>
			<div className="w-full bg-red-300 overflow-hidden">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.09799943125!2d82.90870798154161!3d25.32089491877055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1711016188113!5m2!1sen!2sin"
					height="650"
					width="100%"
					// className="rounded-lg"
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	)
}
