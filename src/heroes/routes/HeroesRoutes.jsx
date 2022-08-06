import { Navbar } from "../../ui/components/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import { DcPage, MarvelPage, HeroPage, SearchPage } from "../../heroes";

export const HeroesRoutes = () => {
	return (
		<>
			<Navbar />

			<div className="container">
				<Routes>
					<Route path="marvel" element={<MarvelPage />}></Route>
					<Route path="dc" element={<DcPage />}></Route>
					<Route path="hero" element={<HeroPage />}></Route>
					<Route path="search" element={<SearchPage />}></Route>

					<Route path="/" element={<Navigate to="/marvel" />}></Route>
				</Routes>
			</div>
		</>
	);
};
