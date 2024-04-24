import { useEffect, useState } from "react"
import CardScroller from "../../components/CardScroller/CardScroller"
import FooterComponent from "../../components/FooterComponent/FooterComponent"
import Header from "../../components/Header/Header"
import ShortlistedProperties from "../../components/ShortlistedProperties/ShortlistedProperties"
import useCurrentUser from "../../hooks/useCurrentUser"
import ToastPopup from "../../components/ToastPopup/ToastPopup"
import Loader from "../../components/Loader/Loader"

export default function Profile() {
	const { currentUser } = useCurrentUser()
	const [loading, setLoading] = useState(false)
	const [messageType, setMessageType] = useState("")
	const [toast, setToast] = useState(false)
	const [message, setMessage] = useState("")

	const [state, setState] = useState({
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		university: "",
		city: "",
		state: "",
		country: "",
		oldPassword: "",
		newPassword: "",
	})
	const [profileImage, setProfileImage] = useState(null)

	useEffect(() => {
		setState({
			firstname: currentUser?.firstname,
			lastname: currentUser?.lastname,
			email: currentUser?.email,
			phone: currentUser?.phone,
			university: currentUser?.university,
			city: currentUser?.city,
			state: currentUser?.state,
			country: currentUser?.country,
		})
	}, [currentUser])

	function handleState(e) {
		const { name, value } = e.target
		setState((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	async function handleUpdate(e) {
		e.preventDefault()

		try {
			setLoading(true)
			const formData = new FormData()
			formData.append("data", JSON.stringify(state))
			if (profileImage) {
				formData.append("profileImage", profileImage[0])
			}

			let result = await fetch(
				`${import.meta.env.VITE_SERVER_BASE_URL}/update-user/${currentUser?._id}`,
				{
					method: "PUT",
					body: formData,
				}
			)
			result = await result.json()

			if (result.message === "success") {
				setMessage("Update Complete")
				setMessageType("success")
				setToast(true)
				setTimeout(() => {
					setToast(false)
					setMessage("")
				}, 3000)
				window.location.reload()
			}

			if (result.message === "wrongPassword") {
				setMessage("Wrong Current Password")
				setMessageType("error")
				setToast(true)
				setTimeout(() => {
					setToast(false)
					setMessage("")
				}, 3000)
			}
			if (result.message === "passwordChanged") {
				setMessage("Password Changed successfully")
				setMessageType("success")
				setToast(true)
				setTimeout(() => {
					setToast(false)
					setMessage("")
				}, 3000)
				if (localStorage.getItem("token")) {
					localStorage.removeItem("token")
				} else {
					sessionStorage.removeItem("token")
				}
				window.location.reload()
			}

			setLoading(false)
		} catch (error) {
			setMessage(error.message)
			setToast(true)
			setTimeout(() => {
				setToast(false)
				setMessage("")
			}, 3000)
		}
	}

	return (
		<>
			<Header />

			<ToastPopup message={message} messageType={messageType} isActive={toast} />

			{!currentUser ? (
				<Loader />
			) : (
				<>
					<div className="userProfile font-poppins lg:my-10 md:my-6 mb-4">
						<div className="custom-container">
							<div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8">
								<div className=" p-2 md:p2 lg:p-8 rounded-xl gap-3  shadow-md grid mb-4  lg:col-span-1 lg:h-fit w-full bg-white">
									<div className="grid place-items-center">
										<div className="border-4  border-[#ed2590] aspect-square h-[160px] rounded-[100vh] overflow-hidden bg-teal-200">
											<img
												className="h-full w-full object-cover"
												src={
													currentUser?.profileUrl ||
													"https://avatar.iran.liara.run/public/boy"
												}
												alt=""
											/>
										</div>
									</div>
									<div className="text-center flex flex-col gap-2">
										<div className="userProfileName capitalize font-semibold">
											{currentUser?.firstname} {currentUser?.lastname}
										</div>
										<div className="userAddress capitalize">Varanasi</div>
										<div className="userCountry capitalize">India</div>
									</div>
									<hr />
									<div className="flex items-center gap-2">
										<span>
											<i className="fa-solid fa-user "></i>
										</span>
										<span className="capitalize">
											{currentUser?.firstname} {currentUser?.lastname}
										</span>
									</div>
									<div className="userUniversity  flex items-center gap-2">
										<span>
											<i className="fa-solid fa-building-columns"></i>
										</span>
										<span className="capitalize">{currentUser?.university}</span>
									</div>
									<hr />
									<div className="userContactNumber  flex items-center gap-2">
										<span>
											<i className="fa-solid fa-address-book"></i>
										</span>
										<span>{currentUser?.phone}</span>
									</div>
									<div className="userEmailAddress  flex items-center gap-2">
										<span>
											<i className="fa-solid fa-envelope"></i>
										</span>
										<span>{currentUser?.email}</span>
									</div>
								</div>
								{/* Update Area */}
								<div className="p-4 lg:p-8 rounded-xl shadow-md grid md:col-span-3 lg:col-span-3 bg-white">
									<div className="profileHeading text-[2em] font-poppins font-bold mb-4">
										Edit Profile
									</div>
									<form onSubmit={handleUpdate} encType="multipart/form-data">
										<div className="grid lg:grid-cols-2 gap-6">
											<label className="flex flex-col border py-2 px-4 rounded-md">
												<span>First Name</span>
												<input
													className=" outline-none"
													type="text"
													value={state?.firstname}
													name="firstname"
													onChange={handleState}
												/>
											</label>
											<label
												htmlFor="lastname"
												className="flex flex-col border py-2 px-4 rounded-md"
											>
												<span>Last Name</span>
												<input
													id="lastname"
													className=" outline-none"
													type="text"
													name="lastname"
													value={state?.lastname}
													onChange={handleState}
												/>
											</label>
											<label
												htmlFor="email"
												className="flex flex-col border py-2 px-4 rounded-md"
											>
												<span>Email</span>
												<input
													id="email"
													className=" outline-none"
													readOnly
													type="email"
													value={state?.email}
													placeholder="xxx@gmail.com"
												/>
											</label>
											<label className="flex flex-col border py-2 px-4 rounded-md">
												<span>Phone</span>
												<input
													className=" outline-none"
													type="text"
													name="phone"
													value={state?.phone}
													onChange={handleState}
													placeholder="+91 XXXX XXX XXX"
												/>
											</label>

											<label className="flex flex-col border py-2 px-4 rounded-md">
												<span>University</span>
												<input
													className=" outline-none"
													type="text"
													name="university"
													value={state.university}
													onChange={handleState}
													placeholder="University"
												/>
											</label>
											<label className="flex flex-col border py-2 px-4 rounded-md">
												<span>City</span>
												<input
													className=" outline-none"
													type="text"
													name="city"
													value={state?.city}
													placeholder="City"
													onChange={handleState}
												/>
											</label>
											<label className="flex flex-col border py-2 px-4 rounded-md">
												<span>State</span>
												<input
													className=" outline-none"
													type="text"
													name="state"
													value={state?.state}
													onChange={handleState}
													placeholder="state"
												/>
											</label>
											<label className="flex flex-col border py-2 px-4 rounded-md">
												<span>Country</span>
												<input
													type="text"
													className=" outline-none"
													name="country"
													value={state?.country}
													onChange={handleState}
													placeholder="Country"
												/>
											</label>
										</div>
										<div>
											<div className="font-semibold text-[1.5em] my-4">
												Change Password
											</div>
											<div className="grid lg:grid-cols-2 gap-6">
												<label className="flex flex-col border py-2 px-4 rounded-md">
													<span>Old Password</span>
													<input
														className=" outline-none"
														type="password"
														name="oldPassword"
														value={state?.oldPassword}
														onChange={handleState}
														placeholder="Old password"
													/>
												</label>
												<label className="flex flex-col border py-2 px-4 rounded-md">
													<span>New Password</span>
													<input
														className="outline-none"
														type="password"
														name="newPassword"
														value={state?.newPassword}
														onChange={handleState}
														placeholder="Change password"
													/>
												</label>
											</div>
										</div>
										<div>
											<div className="font-semibold text-[1.5em] my-4">
												Change Profile Picture
											</div>
											<div className="inputArea">
												<label
													htmlFor="picture"
													className="flex flex-col border py-2 px-4 rounded-md"
												>
													<span className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2">
														Profile Picture
													</span>
													<input
														id="picture"
														type="file"
														onChange={(e) => setProfileImage(e.target.files)}
														className="flex h-10 w-full rounded-md bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
													/>
												</label>
											</div>
										</div>
										<div className="flex justify-center mt-[4rem]">
											<button
												type="submit"
												className="bg-teal-200 py-3 px-8 rounded-[100vh] text-white-A700 font-semibold"
											>
												{loading ? "saving..." : "Save"}
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>

					<ShortlistedProperties />

					<CardScroller />

					<FooterComponent />
				</>
			)}
		</>
	)
}
