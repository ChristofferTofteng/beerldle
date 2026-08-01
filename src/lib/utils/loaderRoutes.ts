export const ROUTES_WITH_LOADER = ['/games/classic', '/games/emoji', '/stats'] as const;

export type LoaderRoute = (typeof ROUTES_WITH_LOADER)[number];

export function shouldShowLoader(pathname: string): boolean {
	return ROUTES_WITH_LOADER.some((route) => pathname.startsWith(route));
}
