import { Route, Routes } from "react-router";
import { appRoutes } from "../../utils/Navigation/AppRoutes";

const AppBody = () => {
	return (
		<Routes>
			{appRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}
		</Routes>
	);
};

export default AppBody;
