import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "app/services/auth.service";
@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
	public loginForm!: FormGroup;
	constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder, public http: HttpClient) {}
	email = new FormControl("", [Validators.required, Validators.email]);

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			email: ["", Validators.required],
			password: ["", Validators.required],
		});
		if (this.auth.isLoggedIn()) {
			this.router.navigate(["dashboard"]);
		}
	}
	onSubmit(): void {
		this.http.get<any>("http://localhost:3000/comments/").subscribe(
			(res) => {
				const user = res.find((a: any) => {
					return a.email === this.loginForm.value.mail && a.password === this.loginForm.value.password;
				});
				if (user) {
					this.loginForm.reset();
					this.auth.login();
					this.router.navigate(["/dashboard"]);
				} else {
					alert("user not found");
				}
			},
			(err) => {
				alert("something went wrong");
			}
		);
	}
}
