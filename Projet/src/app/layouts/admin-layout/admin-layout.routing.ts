import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { GestionUtilisateursComponent } from "app/gestion-utilisateurs/gestion-utilisateurs.component";
import { CalendarComponent } from "../../calendar/calendar.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { HistoryComponent } from "../../history/history.component";
import { GestionDesCongesComponent } from "../../GC/gestion-des-conges/gestion-des-conges.component";
import { AdminComponent } from "app/admin/admin.component";
export const AdminLayoutRoutes: Routes = [
	{
		path: "",
		children: [
			{
				path: "dashboard",
				component: DashboardComponent,
			},
		],
	},
	{
		path: "",
		children: [
			{
				path: "gestion-utilisateurs",
				component: GestionUtilisateursComponent,
			},
		],
	},
	{
		path: "",
		children: [
			{
				path: "calendar",
				component: CalendarComponent,
			},
		],
	},
	{
		path: "",
		children: [
			{
				path: "notifications",
				component: NotificationsComponent,
			},
		],
	},
	{
		path: "",
		children: [
			{
				path: "history",
				component: HistoryComponent,
			},
		],
	},
	{
		path: "",
		children: [
			{
				path: "GC/gestion-des-conges",
				component: GestionDesCongesComponent,
			},
		],
	},
	{
		path: "",
		children: [
			{
				path: "admin",
				component: AdminComponent,
			},
		],
	},
];
