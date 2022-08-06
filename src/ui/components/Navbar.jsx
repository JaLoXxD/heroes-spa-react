import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark px-4 mb-4">
			<Link className="navbar-brand" to="/">
				Asociaciones
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/marvel">
						Marvel
					</NavLink>

					<NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/dc">
						DC
					</NavLink>

					<NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/hero">
						Hero
					</NavLink>

					<NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/search">
						Search
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					{/* <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/login">
						Logout
					</NavLink> */}
					<span className="nav-item nav-link text-info m">Jorge</span>
					<button className="nav-item nav-link btn btn-primary">Logout</button>
				</ul>
			</div>
		</nav>
	);
};
