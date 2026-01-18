import type { ComponentType } from 'react';
import AddExpensePage from '../../components/Routes/AddExpensePage/AddExpensePage';
import EditExpensePage from '../../components/Routes/EditExpensePage/EditExpensePage';
import ExpenseDashBoardPage from '../../components/Routes/ExpenseDashboard/ExpenseDashboard';
import HelpExpensePage from '../../components/Routes/HelpPage/HelpPage';
import NotFoundPage from '../../components/Routes/NotFoundPage/NotFoundPage';
import { NavigationRoutePaths } from './NavigationRoutePaths';

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
		path: NavigationRoutePaths.EDIT_PATTERN,
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
