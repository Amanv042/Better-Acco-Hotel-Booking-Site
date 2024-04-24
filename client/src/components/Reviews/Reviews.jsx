import { useEffect, useState } from "react"
import ReviewCard from "../ReviewCard/ReviewCard"
import useCurrentUser from "../../hooks/useCurrentUser"
import { useParams } from "react-router-dom"

export default function Reviews() {
	const { currentUser } = useCurrentUser()

	const [reviewsData, setReviewsData] = useState([])

	const params = useParams()
	useEffect(() => {
		async function getReviews() {
			let reviews = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/reviews`)
			reviews = await reviews.json()
			setReviewsData(reviews)

			// const reviewLenght = reviews.filter(
			// 	(review) => params.hotelID === review?.reviewOnHotel?._id
			// ).length
			// setReviewLength(reviewLenght)
			// const addedRating = reviews
			// 	.filter((review) => params.hotelID === review?.reviewOnHotel?._id)

			// setAvgRating(addedRating / reviewLenght)
		}
		getReviews()
	}, [])

	return (
		<div className="border border-[var(--theme-clr)] px-8 py-6 rounded-2xl flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<h2 className="font-bold text-2xl	mb-4">
					Reviews (
					{
						reviewsData.filter(
							(review) => params.hotelID === review?.reviewOnHotel?._id
						).length
					}
					)
				</h2>
				{/* Open the modal using document.getElementById('ID').showModal() method */}
				{currentUser?._id ? (
					<ReviewCard currentUserID={currentUser?._id} />
				) : (
					"login/signup to post review"
				)}
			</div>
			{!reviewsData.length && (
				<div className="text-center">No reviews on this hotel</div>
			)}
			{reviewsData
				.filter((review) => params.hotelID === review?.reviewOnHotel?._id)
				.map((re) => {
					const { author } = re
					return (
						<>
							<div className=" flex flex-col w-full  mx-auto  rounded-md ">
								<div className="flex justify-between ">
									<div className="flex space-x-4">
										<div>
											<img
												src={author?.profileUrl}
												alt=""
												onError={(e) =>
													(e.target.src = "https://avatar.iran.liara.run/public/boy")
												}
												className="object-cover w-12 h-12 rounded-full"
											/>
										</div>
										<div>
											<h4 className="font-bold">
												{author?.firstname} {author?.lastname}
											</h4>
											<span className="text-xs ">2 days ago</span>
										</div>
									</div>
									<div className="flex items-center space-x-2 ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
											className="w-5 h-5 fill-current"
										>
											<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
										</svg>
										<span className="text-xl font-bold">{re?.rating}</span>
									</div>
								</div>
								<div className="py-4 space-y-2 text-sm ">{re?.review}</div>
							</div>
							<hr />
						</>
					)
				})}
		</div>
	)
}
