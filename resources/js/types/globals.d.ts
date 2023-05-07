import type { Page, PageProps } from "@inertiajs/core";
import { AxiosInstance } from "axios";
import Echo from "laravel-echo";
import ziggyRoute, { Config as ZiggyConfig } from "ziggy-js";

declare global {
	interface Window {
		axios: AxiosInstance;
		Echo: Echo;
	}

	var route: typeof ziggyRoute;
	var Ziggy: ZiggyConfig;
}

declare module "vue" {
	interface ComponentCustomProperties {
		route: typeof ziggyRoute;
	}
}

declare module "@inertiajs/core" {
	interface PageProps extends Page<PageProps> {
		user: inertia.User;
		jetstream: inertia.Jetstream;
		errors: inertia.Errors;
		errorBags: inertia.ErrorBags;
		flash: inertia.Flash;
	}
}

declare module "@inertiajs/vue3" {
	export function usePage<T extends PageProps = PageProps>(): Page<T>;
}
