import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
	path: string;
	title: string;
	icon: string;
	class: string;
}
export const ROUTES: RouteInfo[] = [
	{ path: "/dashboard", title: "Dashboard", icon: "dashboard", class: "" },
	{ path: "/admin", title: "Admin", icon: "dashboard", class: "" },

	{ path: "/history", title: "History", icon: "content_paste", class: "" },
	{
		path: "/gestion-utilisateurs",
		title: "gestion utilisateurs",
		icon: "person",
		class: "active-pro",
	},
	{
		path: "/GC/gestion-des-conges",
		title: "Gestion des congés",
		icon: "person",
		class: "",
	},
];

@Component({
	selector: "app-sidebar",
	templateUrl: "./sidebar.component.html",
	styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
	menuItems: any[];

	constructor() {}

	ngOnInit() {
		this.menuItems = ROUTES.filter((menuItem) => menuItem);
	}
	isMobileMenu() {
		if ($(window).width() > 991) {
			return false;
		}
		return true;
	}
}
