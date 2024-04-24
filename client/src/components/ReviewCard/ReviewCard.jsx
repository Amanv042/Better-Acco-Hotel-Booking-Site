import { useState } from "react"
import StarRating from "../StarRating/StarRating"
import { useParams } from "react-router-dom"

export default function ReviewCard({ currentUserID }) {
	const [starRating, setStarRating] = useState("")
	const [reviewMessage, setReviewMessage] = useState("")
	const params = useParams()

	async function handleReviews() {
		const formData = new FormData()
		formData.append("starRating", starRating)
		formData.append("reviewMessage", reviewMessage)

		let result = await fetch(
			`${import.meta.env.VITE_SERVER_BASE_URL}/post-review/${currentUserID}/${
				params.hotelID
			}`,
			{
				method: "POST",
				body: formData,
			}
		)
		await result.json()
		window.location.reload()
	}

	return (
		<>
			<button
				className="bg-[var(--theme-clr)] text-white py-2 px-4 rounded-xl"
				onClick={() => document.getElementById("my_modal_1").showModal()}
			>
				Post Review
			</button>
			<dialog id="my_modal_1" className="modal">
				<div className="modal-box">
					<div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12">
						<div className="flex flex-col items-center w-full">
							<h2 className="text-3xl font-semibold text-center">
								Your opinion matters!
							</h2>
							<StarRating size={50} onSetRating={setStarRating} />
							<div className="flex flex-col w-full">
								<textarea
									rows="8"
									placeholder="Feedback..."
									className="p-4 rounded-md resize-none border outline-none focus:border-[var(--theme-clr)]"
									onChange={(e) => setReviewMessage(e.target.value)}
								></textarea>
								<button
									onClick={handleReviews}
									type="button"
									className="py-4 my-8 font-semibold rounded-md border bg-[var(--theme-clr)] text-white"
								>
									Leave feedback
								</button>
							</div>
						</div>
					</div>

					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn">Maybe later</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	)
}
