import ModernInput from "../../components/ModernInput/ModernInput"

export default function ResetPassword() {
	return (
		<>
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
									<span className="sr-only">Reset Password</span>
									<img src="images/Logo.svg" alt="" />
								</a>

								<h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
									Welcome to BetterAcco
								</h1>

								<p className="mb-4 leading-relaxed text-gray-500">
									Book a room that you&apos;ll call home..!
								</p>
							</div>

							<h1 className="font-bold lg:text-[5em] md:text-[4em] hidden lg:block mb-10">
								Better Acco
							</h1>
							<h2 className="font-bold text-[2em]">Reset Password</h2>
							<p className="text-gray-400 lg:w-10/12">
								Your previous password has been reseted. Please set a new password for
								your account.
							</p>
							<form action="#" className="mt-8 grid grid-cols-6 gap-6">
								<div className="col-span-6">
									<ModernInput
										placeHolder="Enter new password"
										type="email"
										name="new-password"
									/>
								</div>

								<div className="col-span-6">
									<ModernInput
										placeHolder="Re-enter new passowrd"
										type="password"
										name="confirm-password"
									/>
								</div>

								<div className="col-span-6 sm:flex flex-col sm:items-center sm:gap-4">
									<button className="block w-full shrink-0 rounded-md border border-[var(--theme-clr)] bg-[var(--theme-clr)] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[var(--theme-clr)] focus:outline-none focus:ring active:text-[var(--theme-clr)]">
										Set Password
									</button>
								</div>
							</form>
						</div>
					</main>
				</div>
			</section>
		</>
	)
}
