import type { ComponentType } from "react";
import AddExpensePage from "../../routes/AddExpensePage/AddExpensePage";
import EditExpensePage from "../../routes/EditExpensePage/EditExpensePage";
import ExpenseDashBoardPage from "../../routes/ExpenseDashboard/ExpenseDashboard";
import HelpExpensePage from "../../routes/HelpPage/HelpPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import { NavigationRoutePaths } from "./NavigationRoutePaths";

interface AppRoute {
	path: string;
	Component: ComponentType;
}

export const appRoutes: AppRoute[] = [
	{
		path: NavigationRoutePaths.DASHBOARD,
		Component: ExpenseDashBoardPage,
	},
	{
		path: NavigationRoutePaths.CREATE_PAGE,
		Component: AddExpensePage,
	},
	{
		path: NavigationRoutePaths.EDIT_PAGE,
		Component: EditExpensePage,
	},
	{
		path: NavigationRoutePaths.HELP_PAGE,
		Component: HelpExpensePage,
	},
	{
		path: NavigationRoutePaths.NOT_FOUND, // Handles invalid routes.. Must always be last
		Component: NotFoundPage,
	},
];
