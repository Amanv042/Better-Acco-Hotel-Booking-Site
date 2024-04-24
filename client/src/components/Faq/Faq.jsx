import React from "react"

export default function Faq() {
	return (
		<div className="border border-[var(--theme-clr)] px-8 py-6 rounded-2xl flex flex-col gap-4">
			<h2 className="font-bold text-2xl mb-4">Frequently Asked Questions</h2>

			<div className="collapse collapse-arrow">
				<input type="radio" name="my-accordion-2" defaultChecked />
				<div className="collapse-title text-lg font-medium">
					How much is my deposit?
				</div>
				<div className="collapse-content">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium,
						maxime facilis! Eaque accusantium ex nam sequi suscipit aut repudiandae
						libero praesentium, quasi illo optio nemo fuga nisi nulla at molestias
						dolor. Aut porro eos, eligendi repellendus optio repudiandae quis saepe?
						Fugiat voluptatum commodi ullam, nesciunt corporis quaerat velit beatae
						impedit?
					</p>
				</div>
			</div>
			<hr />
			<div className="collapse collapse-arrow">
				<input type="radio" name="my-accordion-2" />
				<div className="collapse-title text-lg font-medium">
					What do you do with my deposit?
				</div>
				<div className="collapse-content">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
						illum amet incidunt soluta. Quae delectus et non perferendis rem sit
						recusandae accusamus distinctio quisquam voluptate mollitia amet impedit
						facere neque nostrum obcaecati, ea optio voluptates consequuntur magnam
						odit molestias ad tempora qui. Eum aliquid rem modi, sit nulla id unde.
					</p>
				</div>
			</div>
			<hr />
			<div className="collapse collapse-arrow">
				<input type="radio" name="my-accordion-2" />
				<div className="collapse-title text-lg font-medium">
					When do I get my deposit back?
				</div>
				<div className="collapse-content">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore hic qui
						ratione fugit nesciunt, libero temporibus fuga unde quo ipsa? Recusandae
						nisi repellat voluptatibus animi, ducimus repudiandae voluptates qui
						adipisci dolore doloribus fuga doloremque possimus earum cupiditate cum
						sit corporis error libero nostrum necessitatibus porro magni molestiae
						tempore! Ea, quas.
					</p>
				</div>
			</div>
			<hr />
			<div className="collapse collapse-arrow">
				<input type="radio" name="my-accordion-2" />
				<div className="collapse-title text-lg font-medium">
					Upon arrival at the property, what do I need to bring with me?
				</div>
				<div className="collapse-content">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore hic qui
						ratione fugit nesciunt, libero temporibus fuga unde quo ipsa? Recusandae
						nisi repellat voluptatibus animi, ducimus repudiandae voluptates qui
						adipisci dolore doloribus fuga doloremque possimus earum cupiditate cum
						sit corporis error libero nostrum necessitatibus porro magni molestiae
						tempore! Ea, quas.
					</p>
				</div>
			</div>
			<hr />
			<div className="collapse collapse-arrow">
				<input type="radio" name="my-accordion-2" />
				<div className="collapse-title text-lg font-medium">
					What can/should I bring?
				</div>
				<div className="collapse-content">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore hic qui
						ratione fugit nesciunt, libero temporibus fuga unde quo ipsa? Recusandae
						nisi repellat voluptatibus animi, ducimus repudiandae voluptates qui
						adipisci dolore doloribus fuga doloremque possimus earum cupiditate cum
						sit corporis error libero nostrum necessitatibus porro magni molestiae
						tempore! Ea, quas.
					</p>
				</div>
			</div>
		</div>
	)
}
