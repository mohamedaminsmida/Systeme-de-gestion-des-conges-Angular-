import { Component, OnInit, ViewChild } from "@angular/core";

import { MatTableDataSource } from "@angular/material/table";
import { ApiService } from "app/services/api.service";
@Component({
	selector: "app-listes-des-conges",
	templateUrl: "./listes-des-conges.component.html",
	styleUrls: ["./listes-des-conges.component.css"],
})
export class ListesDesCongesComponent implements OnInit {
	displayedColumns: string[] = ["statut", "nom", "prenom", "ddebut", "dfin", "nbr", "type", "commentaire", "descision"];
	dataSource: MatTableDataSource<any>;
	status: string = "En cours";

	constructor(private api: ApiService) {}

	getdemand1() {
		this.api.getDemand().subscribe({
			next: (res) => {
				this.dataSource = new MatTableDataSource(res);

				console.log(res);
			},
			error: (err) => {
				alert("error while fetching the records ");
			},
		});
	}

	ngOnInit(): void {
		this.getdemand1();
	}
}
