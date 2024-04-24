import React from "react";
import { Link } from "react-router-dom";
import "./HotelCards.css";

const HotelCards = ({ data }) => {
  
    
  return (
			<>
				<div className="card" key={data?.id}>
					<div className="card-container">
						<div className="card-image w-full h-[360px] rounded-[1rem] overflow-hidden">
							<img
								className="object-cover w-full h-full"
								src="https://img.freepik.com/free-photo/beautiful-landscape-mother-nature_23-2148992406.jpg?w=1380&t=st=1710736467~exp=1710737067~hmac=fb058ec30545f1cde0aad6bf0277d48066edf10c13d68d43ddf8a83a51028284"
								alt="noImageFound"
							/>
						</div>
						<div className="card-details">
							<div className="card-upper-part">
								<div className="card-title">HelloWOrld</div>
								<div className="title-location">
									<i className="fa-solid fa-location-dot"></i>
									<span>
									Sigra, Varanasi
									</span>
								</div>
								<div className="furthur-details mt-4">
									<div className="rating-details">
										<div
											className="rating-and-aminities flex
                  items-center justify-between"
										>
											<div className="rating">
												<span className="star-rating">
													{/* {data.rating === 1 && "⭐"}
													{data.rating === 2 && "⭐⭐"}
													{data.rating === 3 && "⭐⭐⭐"}
													{data.rating === 4 && "⭐⭐⭐⭐"}
													{data.rating === 5 && "⭐⭐⭐⭐⭐"} */}
                        Starts
												</span>
												<span>5 Star Hotel</span>
											</div>
											<div className="aminities  flex gap-2 items-center">
												<i className="fa-solid fa-mug-saucer"></i>
												<span className="font-bold">10</span> Amenities
											</div>
										</div>
										<div className="title-reviews flex items-center gap-2 mt-3">
											<div className="rating-card p-3 border-solid border-2 border-teal-500 rounded">
											55
											</div>
											<div className="reviews-marks font-bold">Very Good </div>
											<div className="reviews-number">200</div>
											<div className="review-text">reviews</div>
										</div>
									</div>
									<div className="title-pricing flex flex-col text-right">
										<div className="price-text">starting from</div>
										<div className="price font-bold my-1 text-teal-500">
											₹ 500/week
										</div>
										<div className="pricing-footer">excl. tax</div>
									</div>
								</div>
							</div>
							<hr className="my-5" />
							<div className="watch-btn-and-fav-btn flex items-center gap-3">
								<button
									className="fav-btn p-6 border-solid border-2 border-teal-500 rounded"
									onClick={() => {
										handleFavourite(data?._id)
									}}
								>
									<i className="fa-solid fa-heart"></i>
								</button>
								<Link
									to={`/propertydetails/${data?._id}`}
									className="watch-btn p-6 rounded bg-teal-500 w-full flex items-center justify-center "
								>
									<span className="text-teal-50 font-bold">View Place</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</>
		)
};

export default HotelCards;
