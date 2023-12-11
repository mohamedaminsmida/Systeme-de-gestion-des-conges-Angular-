import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as process from "process";


@Injectable({
	providedIn: "root",
})


export class ApiService {
	constructor(private http: HttpClient) {}
	postDemand(data: any) {
		return this.http.post<any>("http://localhost:3000/demandc/", data);
	}
	getDemand() {
		return this.http.get<any>("http://localhost:3000/demandc/");
	}
	putDemand(data: any, id: number) {
		return this.http.put<any>("http://localhost:3000/demandc/" + id, data);
	}
	deleteDemand(id: number) {
		return this.http.delete<any>("http://localhost:3000/demandc/" + id);
	}
	postUser(data: any) {
		return this.http.post<any>("http://localhost:3000/comments/", data);
	}
	getUser() {
		return this.http.get<any>("http://localhost:3000/comments/");
	}
	putUser(data: any, id: number) {
		return this.http.put<any>("http://localhost:3000/comments/" + id, data);
	}
	deleteUser(id: number) {
		return this.http.delete<any>("http://localhost:3000/comments/" + id);
	}

	
}
