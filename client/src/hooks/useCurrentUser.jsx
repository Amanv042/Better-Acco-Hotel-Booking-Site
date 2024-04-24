import { useEffect, useState } from "react"

export default function useCurrentUser() {
	const [currentUser, setCurrentUser] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const token = localStorage.getItem("token") || sessionStorage.getItem("token")

	useEffect(() => {
		async function getUserData() {
			const formData = new FormData()
			formData.append("token", token)

			setIsLoading(true)

			if (token) {
				let result = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/user`, {
					method: "POST",
					body: formData,
				})

				result = await result?.json()
				setCurrentUser(result?.data)
				setIsLoading(false)
			}
		}
		getUserData()
	}, [token])
	return { currentUser, isLoading }
}
