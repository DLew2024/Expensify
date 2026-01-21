export const NavigationRoutePaths = {
	DASHBOARD: '/',
	CREATE_PAGE: '/create',
	EDIT_PATTERN: (id?: string) => `/edit/${id ?? `:id`}`,
	HELP_PAGE: '/help',
	NOT_FOUND: '*', // Handles invalid routes.
} as const;

export const buildEditPath = (id: string | number) => `/edit/${id}`;
