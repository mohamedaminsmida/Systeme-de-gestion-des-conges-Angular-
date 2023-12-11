import { Observable, of, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "./api.service";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(private router: Router, private api: ApiService) {}

	setToken(token: string): void {
		localStorage.setItem("token", token);
	}

	getToken(): string | null {
		return localStorage.getItem("token");
	}

	isLoggedIn() {
		return this.getToken() !== null;
	}

	logout() {
		localStorage.removeItem("token");
		this.router.navigate(["login"]);
	}

	login() {
		this.setToken("abcdefghijklmnopqrstuvwxyz");
		return of({ name: "wassim", email: "admin@gmail.com" });
	}
}
