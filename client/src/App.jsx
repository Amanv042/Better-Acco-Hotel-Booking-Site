import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage"
import Signup from "./pages/Signup/Signup"
import Blogs from "./pages/Blogs/Blogs"
import Login from "./pages/Login/Login"
import ResetPassword from "./pages/ResetPassword/ResetPassword"
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"
import Profile from "./pages/Profile/Profile"
import About from "./pages/About/About"
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails"
import NotFound from "./components/NotFound/NotFound"
import PropertyListing from "./pages/PropertyListing/PropertyListing"
import HotelForm from "./pages/HotelForm/HotelForm"
import NotLogined from "./ProtectedRoute/NotLogined"
import Logined from "./ProtectedRoute/Logined"
import Loader from "./components/Loader/Loader"
import React from "react"
import Compare from "./pages/Compare/Compare"
import Partner from "./pages/Partner/Partner"

function App() {
	return (
		<>
			<React.Suspense fallback={<Loader />}>
				<Router>
					<Routes>
						<Route path="*" element={<NotFound />} />
						<Route path="/" element={<Homepage />} />
						<Route path="/login" element={<Logined Component={Login} />} />
						<Route path="/signup" element={<Logined Component={Signup} />} />
						<Route path="/forgot-password" element={<ForgotPassword />} />
						<Route path="/reset-password" element={<ResetPassword />} />
						<Route path="/user" element={<NotLogined Component={Profile} />} />
						<Route path="/about-us" element={<About />} />
						<Route path="/partners" element={<Partner />} />
						<Route path="/compare" element={<Compare />} />
						<Route path="/blogs" element={<Blogs />} />
						<Route path="/add-listing" element={<HotelForm />} />
						<Route path="/property/:hotelID" element={<PropertyDetails />} />
						<Route path="/property-listing" element={<PropertyListing />} />
					</Routes>
				</Router>
			</React.Suspense>
		</>
	)
}

export default App
