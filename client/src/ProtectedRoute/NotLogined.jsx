import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function NotLogined({ Component }) {
	const token = localStorage.getItem("token") || sessionStorage.getItem("token")

	const navigate = useNavigate()
	useEffect(() => {
		if (!token) {
			navigate("/")
		}
	}, [token, navigate])

	return <Component />
}
