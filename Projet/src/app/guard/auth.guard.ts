import { AuthService } from "app/services/auth.service";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private auth: AuthService) {}
	canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
		if (!this.auth.isLoggedIn()) {
			this.router.navigate(["login"]);
		}
		return this.auth.isLoggedIn();
	}
}
