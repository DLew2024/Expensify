import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import { appRoutes } from "./utils/Navigation/AppRoutes";

function App() {
	return (
		<>
			<Header />
			<Routes>
				{appRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
			</Routes>
		</>
	);
}

export default App;
