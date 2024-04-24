import React from "react"
import { Link } from "react-router-dom"
import ImageGallery from "../ImageGallery/ImageGallery"
const ScrollCard = ({ data }) => {
	return (
		<>
			<Link to={`/property/${data?._id}`} className="w-full font-poppins">
				<div className="ScrollCard">
					<div className="ScrollCard-container">
						<div className="slider-div rounded-[1rem]  aspect-square overflow-hidden">
							<img src={data?.images[0].imagePath} alt={data?.images[0].imagePath} />
						</div>
						<div className="ScrollCardDetails px-2">
							<div className="text-[1.3em] my-2">
								<span className="text-sm">Starting From: </span>
								<span className="font-semibold ">{data?.price}/week</span>
							</div>
							<div className="font-bold text-[1.4em]">{data?.hotelName}</div>
							<div className="text-gray-400 font-normal">{data?.address?.city}</div>
							{/* <div className="text-[0.8em]">
								<span>
									<i className="fa-solid fa-user"></i>
								</span>{" "}
								<span>{data?.bedroom} Room Available</span>
							</div> */}
							<div className="flex gap-4 text-[0.9em]">
								<div>
									<span>
										<i className="fa-solid fa-bed"></i>
									</span>{" "}
									<span>{data?.bedroom} Beds</span>
								</div>
								<div>
									<span>
										<i className="fa-solid fa-bath"></i>
									</span>{" "}
									<span>{data?.bathroom} Bath</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</>
	)
}

export default ScrollCard
