import { Link, NavLink } from "react-router-dom"
import DropdownMenu from "../DropdownMenu/DropdownMenu"
import "./Navbar.css"
import useCurrentUser from "../../hooks/useCurrentUser"

export default function Navbar() {
	const { currentUser } = useCurrentUser()

	function handleLogout() {
		if (localStorage.getItem("token")) {
			localStorage.removeItem("token")
		} else {
			sessionStorage.removeItem("token")
		}
	}

	return (
		<div className="py-1 lg:py-3 md:py-3 sm:py-2">
			<div className="navbar custom-container">
				<div className="navbar-start">
					<div className="dropdown responsiveNavbar">
						<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/about-us">About</NavLink>
							</li>
							<li>
								<Link to="/property-listing">Property Listing</Link>
							</li>
							<li>
								<Link to="/country-listing">Country Listing</Link>
							</li>
							<li>
								<NavLink to="/compare">Compare</NavLink>{" "}
							</li>
							<li>
								<NavLink to="/blogs">Blogs</NavLink>
							</li>
						</ul>
					</div>
					<ul className="flex items-center gap-[1rem] header-navLinks">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/about-us">About</NavLink>
						</li>
						<li>
							<DropdownMenu align="bottom">
								<div tabIndex={0} role="button">
									Listing
								</div>
								<ul
									tabIndex={0}
									className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 dark:shadow-xl dark:border dark:border-white	"
								>
									<li>
										<Link to="/property-listing">Property Listing</Link>
									</li>
									<li>
										<Link to="/country-listing">Country Listing</Link>
									</li>
								</ul>
							</DropdownMenu>
						</li>{" "}
						<li>
							{" "}
							<NavLink to="/compare">Compare</NavLink>{" "}
						</li>{" "}
						<li>
							<NavLink to="/blogs">Blogs</NavLink>
						</li>
					</ul>
				</div>
				<div className="navbar-center">
					<div>
						<img src="images/Logo.svg" alt="" className="w-[200px]" />
					</div>
				</div>
				<div className="navbar-end">
					<h2 className="font-bold">
						{currentUser?.firstname} {currentUser?.lastname}
					</h2>
					<DropdownMenu align="end">
						<div
							tabIndex={0}
							role="button"
							className="m-1 w-[40px] aspect-square  rounded-[100vh] p-2 grid place-items-center border-2 border-[var(--theme-clr)]"
						>
							<i className="fa-regular fa-user"></i>
						</div>
						<ul
							tabIndex={0}
							className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-52 border-2 border-[var(--theme-clr)]"
						>
							{currentUser && (
								<li>
									<Link to="/user">Profile</Link>
								</li>
							)}
							{!currentUser && (
								<>
									<li>
										<Link to="/login">Login</Link>
									</li>
									<li>
										<Link to="/Signup">Signup</Link>
									</li>
								</>
							)}
							{currentUser?.role === "admin" && (
								<li>
									<NavLink to="/add-listing">Add Listing</NavLink>
								</li>
							)}
							{currentUser && (
								<li>
									<Link to="/login" onClick={handleLogout}>
										Logout
									</Link>
								</li>
							)}
						</ul>
					</DropdownMenu>
				</div>
			</div>
		</div>
	)
}
