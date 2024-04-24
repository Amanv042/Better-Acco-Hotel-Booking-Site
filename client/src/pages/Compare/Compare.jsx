import "./Compare.css"

import FooterComponent from "../../components/FooterComponent/FooterComponent"
import Header from "../../components/Header/Header"
import { useEffect, useState } from "react"
import ImageGallery from "../../components/ImageGallery/ImageGallery"
import { Link } from "react-router-dom"

export default function Compare() {
	const [hotelDetails, setHotelDetails] = useState([])

	const [compareInput1, setCompareInput1] = useState("")
	const [compareInput2, setCompareInput2] = useState("")

	const [hotelID1, setHotelID1] = useState("")
	const [hotelID2, setHotelID2] = useState("")

	const [compare1, setCompare1] = useState({})
	const [compare2, setCompare2] = useState({})

	useEffect(() => {
		async function hotelList() {
			let result = await fetch(
				`${import.meta.env.VITE_SERVER_BASE_URL}/hotelData/`
			)
			result = await result.json()
			setHotelDetails(result)
		}
		hotelList()
		if (hotelID1) {
			const compareHotel1 = hotelDetails.find((hotel) => hotel?._id === hotelID1)
			setCompare1(compareHotel1)
		}
		if (hotelID2) {
			const compareHotel2 = hotelDetails.find((hotel) => hotel?._id === hotelID2)
			setCompare2(compareHotel2)
		}
	}, [hotelID1, hotelID2])

	return (
		<>
			<Header />

			<main>
				<div className="custom-container text-center ">
					<h1 className="lg:text-5xl font-bold my-4">Compare Properties</h1>
					<p className="text-[--text-clr]">
						Book student accommodations near top cities and universities around the
						world.
					</p>
				</div>

				<section className="my-8">
					<div className="custom-container">
						<div className="grid grid-cols-2 gap-8">
							<div className="relative">
								<input
									type="search"
									placeholder="Compare hotels"
									value={compareInput1}
									onChange={(e) => setCompareInput1(e.target.value)}
									className="w-full border border-[--theme-clr] py-4 px-4 outline-none caret-[--theme-clr] compare-input"
								/>
								<div className="overflow-y-scroll border border-[--theme-clr] h-[200px] rounded-[1rem] overflow-hidden absolute z-10 inset-0 top-[105%] shadow-2xl bg-[--white-clr] compare-list">
									{hotelDetails
										?.filter((hotel) => {
											return compareInput1 === ""
												? hotel
												: hotel?.hotelName
														.toLowerCase()
														.includes(compareInput1.toLowerCase())
										})
										?.map((hotel) => {
											return (
												<button
													key={hotel?.hotelName}
													className="cursor-pointer block w-full text-left"
													onClick={() => {
														setHotelID1(hotel?._id)
														setCompareInput1(hotel?.hotelName)
													}}
												>
													<div className="h-[80px] flex flex-col justify-center px-8 ">
														<h2 className="font-semibold text-xl text-[--text-clr]">
															{hotel?.hotelName}
														</h2>
														<p className="text-[--text-clr]">
															{hotel?.address?.city}, {hotel?.address?.country}
														</p>
													</div>
													<hr />
												</button>
											)
										})}
								</div>
							</div>
							{hotelID1 ? (
								<div className="relative">
									<input
										type="search"
										placeholder="Compare hotels"
										value={compareInput2}
										onChange={(e) => setCompareInput2(e.target.value)}
										className="w-full border border-[--theme-clr] py-4 px-4 outline-none rounded-full caret-[--theme-clr] compare-input"
									/>
									<div className="overflow-y-scroll border border-[--theme-clr] h-[200px] rounded-[1rem] overflow-hidden absolute z-10 inset-0 top-[105%] shadow-2xl bg-[--white-clr] compare-list">
										{hotelDetails
											?.filter((hotel) => {
												return compareInput2 === ""
													? hotel
													: hotel?.hotelName
															.toLowerCase()
															.includes(compareInput2.toLowerCase())
											})
											?.map((hotel) => {
												return (
													<button
														key={hotel?.hotelName}
														className="cursor-pointer block w-full text-left"
														onClick={() => {
															setHotelID2(hotel?._id)
															setCompareInput2(hotel?.hotelName)
														}}
													>
														<div className="h-[80px] flex flex-col justify-center px-8 ">
															<h2 className="font-semibold text-xl text-[--text-clr]">
																{hotel?.hotelName}
															</h2>
															<p className="text-[--text-clr]">
																{hotel?.address?.city}, {hotel?.address?.country}
															</p>
														</div>
														<hr />
													</button>
												)
											})}
									</div>
								</div>
							) : (
								<div className="grid place-items-center"> select first hotel</div>
							)}
						</div>
					</div>
				</section>

				<section className="">
					<div className="custom-container">
						{hotelID1 && hotelID2 && (
							<div className="grid grid-cols-2 gap-8 ">
								<div>
									<ImageGallery images={compare1?.images} autoplay={false} />
								</div>
								<div>
									<ImageGallery images={compare2?.images} autoplay={false} />
								</div>
							</div>
						)}

						{hotelID1 && hotelID2 ? (
							<div className="overflow-x-auto sticky top-[1rem]  my-4">
								<table className="min-w-full divide-y-2 divide-gray-200  text-sm text-center">
									<tbody className=" divide-gray-200">
										<tr className="flex gap-8 py-2">
											<td className="whitespace-nowrap  px-4 py-2 font-medium border  shadow-md  rounded-full text-gray-900 bg-white text-3xl flex-1">
												<Link
													className="block w-full h-full"
													to={`/property/${compare1?._id}`}
												>
													{compare1?.hotelName}
												</Link>
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-900 border  shadow-md  rounded-full bg-white text-3xl flex-1">
												<Link
													className="block w-full h-full"
													to={`/property/${compare2?._id}`}
												>
													{compare2?.hotelName}
												</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						) : (
							<div className="text-center">select hotels to show comparision</div>
						)}

						{hotelID1 && hotelID2 && (
							<div className="overflow-x-auto ">
								<table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
									<tbody className="">
										{/* Price */}
										<tr className="text-center border-b">
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												price
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare1?.price}
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												price
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare2?.price}
											</td>
										</tr>
										{/* Property Type */}
										<tr className="text-center border-b">
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												Property Type
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare1?.propertyType}
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												Property Type
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare2?.propertyType}
											</td>
										</tr>
										{/* landmark */}
										<tr className="text-center border-b">
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												Landmark
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare1?.address?.landmark}
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												Landmark
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare2?.address?.landmark}
											</td>
										</tr>
										{/* city */}
										<tr className="text-center border-b">
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												city
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare1?.address?.city}
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												city
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare2?.address?.city}
											</td>
										</tr>
										{/* state */}
										<tr className="text-center border-b">
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												State
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare1?.address?.state}
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												State
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare2?.address?.state}
											</td>
										</tr>
										{/* postal code */}
										<tr className="text-center border-b">
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												Postal Code
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare1?.address?.postalCode}
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												Postal Code
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare2?.address?.postalCode}
											</td>
										</tr>
										{/* country */}
										<tr className="text-center border-b">
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												Country
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare1?.address?.country}
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												Country
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare2?.address?.country}
											</td>
										</tr>
										{/* property size */}
										<tr className="text-center border-b">
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												Property Size
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare1?.propertySize}
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												Property Size
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare2?.propertySize}
											</td>
										</tr>
										{/* propertyID */}
										<tr className="text-center border-b">
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												Property ID
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare1?._id}
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												Property ID
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare2?._id}
											</td>
										</tr>
										{/* bedrooms */}
										<tr className="text-center border-b">
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												bedrooms
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare1?.bedroom}
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												bedrooms
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare2?.bedroom}
											</td>
										</tr>
										{/* bathroom */}
										<tr className="text-center border-b">
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												Bathrooms
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare1?.bathroom}
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												Bathrooms
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare2?.bathroom}
											</td>
										</tr>
										{/* garage */}
										<tr className="text-center border-b">
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												Garages
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare1?.garage}
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
												Garages
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
												{compare2?.garage}
											</td>
										</tr>
										{/* garage */}
										{compare1 &&
											Object.entries(compare1.amenities).map(([key, value]) => (
												<tr className="text-center border-b" key={key}>
													<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
														{key}
													</td>

													<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
														{value ? (
															<span className="text-[--theme-clr]">
																<i className="fa-regular fa-circle-check"></i>
															</span>
														) : (
															<span className="text-red-400">
																<i className="fa-regular fa-circle-xmark"></i>
															</span>
														)}
													</td>
													<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-xl font-bold capitalize">
														{key}
													</td>
													<td className="whitespace-nowrap px-4 py-2 text-gray-700 font-medium text-lg">
														{compare2?.amenities?.[key]}
														{compare2?.amenities?.[key] ? (
															<span className="text-[--theme-clr]">
																<i className="fa-regular fa-circle-check"></i>
															</span>
														) : (
															<span className="text-red-400">
																<i className="fa-regular fa-circle-xmark"></i>
															</span>
														)}
													</td>
												</tr>
											))}
									</tbody>
								</table>
							</div>
						)}
					</div>
				</section>
			</main>

			<FooterComponent />
		</>
	)
}
