import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useEffect, useRef, useState } from "react"
import ToastPopup from "../../components/ToastPopup/ToastPopup"

export default function Login() {
	const { register, handleSubmit } = useForm()

	const [toast, setToast] = useState(false)
	const [errorMessage, setErrorMessage] = useState(false)
	const navigate = useNavigate()

	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	async function handleForm(data) {
		try {
			const formData = new FormData()
			formData.append("data", JSON.stringify(data))
			let result = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/login`, {
				method: "POST",
				body: formData,
			})
			result = await result.json()
			if (result.status === "loginSuccess") {
				if (data.remember) {
					localStorage.setItem("token", result.token)
				} else {
					sessionStorage.setItem("token", result.token)
				}
			}
			if (result.error === "userNotFound") throw new Error("Check Credentials")
			if (result.error === "loginError") throw new Error("Login Error")
			if (result.error === "invalidPassword") throw new Error("Check Credentials")
			navigate("/")
		} catch (error) {
			setErrorMessage(error.message)
			setToast(true)
			setTimeout(() => {
				setToast(false)
			}, 3000)
		}
	}

	return (
		<>
			<ToastPopup message={errorMessage} messageType={"error"} isActive={toast} />

			<section className="bg-white">
				<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
					<section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
						<img
							alt="card-image"
							src="/images/mainBG.jpg"
							onError={(e) => {
								e.currentTarget.src = "/images/backupBG.jpg"
							}}
							className="absolute inset-0 h-full w-full object-cover opacity-80"
						/>

						<div className="hidden lg:relative lg:block lg:p-12">
							<h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
								Welcome to BetterAcco
							</h2>

							<p className="mt-4 leading-relaxed text-white/90">
								Book a room that you&apos;ll call home..!
							</p>
							<p className="mt-4 leading-relaxed text-white/70">
								Book student accommodations near top universities and cities across the
								globe.
							</p>
						</div>
					</section>

					<main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
						<div className="">
							<div className="relative -mt-24 block lg:hidden">
								<a
									className="inline-flex size-32 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
									href="#"
								>
									<span className="sr-only">Signup</span>
									<img src="images/Logo.svg" alt="" />
								</a>

								<h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
									Welcome to BetterAcco
								</h1>

								<p className="mb-4 leading-relaxed text-gray-500">
									Book a room that you&apos;ll call home..!
								</p>
							</div>

							<h1 className="font-bold lg:text-[5em] md:text-[4em] hidden lg:block mb-5">
								Better Acco
							</h1>
							<Link
								to="/"
								className="grid place-items-center border border-[var(--theme-clr)] w-10 aspect-square text-white rounded-full absolute top-[1rem] left-[1rem]"
							>
								<span>
									<i className="fa-solid fa-arrow-left"></i>
								</span>
							</Link>
							<h2 className="font-bold text-[3em]">Login</h2>
							<p className="text-gray-400 w-10/12">
								Login to access your BetterAcco account
							</p>
							<form
								onSubmit={handleSubmit(handleForm)}
								encType="multpart/form-data"
								className="mt-8 grid grid-cols-6 gap-6"
							>
								<div className="col-span-6">
									<label
										htmlFor="email"
										className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
										ref={inputRef}
									>
										<input
											type="email"
											id="email"
											className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none w-full focus:ring-0  py-3 px-2"
											placeholder="Email"
											{...register("email", { required: true })}
										/>

										<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
											Email
										</span>
									</label>
								</div>

								<div className="col-span-6">
									<label
										htmlFor="password"
										className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-[var(--theme-clr)] focus-within:ring-1 focus-within:ring-[var(--theme-clr)]"
									>
										<input
											type="password"
											id="password"
											className="peer border-none w-full bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  py-3 px-2"
											placeholder="Password"
											{...register("password", { required: true })}
										/>

										<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
											Password
										</span>
									</label>
								</div>

								<div className="col-span-6">
									<label htmlFor="MarketingAccept" className="flex gap-4">
										<input
											type="checkbox"
											id="MarketingAccept"
											name="marketing_accept"
											className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
											{...register("remember")}
										/>

										<span className="text-sm text-gray-700">Remember me</span>
									</label>
								</div>

								<div className="col-span-6 sm:flex flex-col sm:items-center sm:gap-4">
									<button
										type="submit"
										className="block w-full shrink-0 rounded-md border border-[var(--theme-clr)] bg-[var(--theme-clr)] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[var(--theme-clr)] focus:outline-none focus:ring active:text-[var(--theme-clr)]"
									>
										Login
									</button>

									<p className="mt-4 text-sm text-gray-500 sm:mt-0 flex gap-1">
										<p>Don&apos;t have an account?</p>
										<Link to="/signup" className="text-gray-700 underline">
											Signup
										</Link>
										.
									</p>
									<Link
										to="/forgot-password"
										className="text-gray-700 underline w-full text-center"
									>
										Forgot Password
									</Link>
								</div>
							</form>
						</div>
					</main>
				</div>
			</section>
		</>
	)
}
