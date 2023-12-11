import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DemandesCongesComponent } from "./demandes-conges/demandes-conges.component";
import { ListesDesCongesComponent } from "./listes-des-conges/listes-des-conges.component";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ApiService } from "app/services/api.service";

@Component({
	selector: "app-gestion-des-conges",
	templateUrl: "./gestion-des-conges.component.html",
	styleUrls: ["./gestion-des-conges.component.css"],
})
export class GestionDesCongesComponent implements OnInit {
	displayedColumns: string[] = ["statut", "nom", "prenom", "ddebut", "dfin", "nbr", "type", "commentaire", "action"];
	dataSource: MatTableDataSource<any>;
	status: string = "En cours";

	constructor(public dialog: MatDialog, private api: ApiService) {}

	openDialog() {
		this.dialog
			.open(DemandesCongesComponent, { disableClose: true, width: "40%" })
			.afterClosed()
			.subscribe((val) => {
				if (val === "save") {
					this.getdemand();
				}
			});
	}
	openDialog2() {
		this.dialog.open(ListesDesCongesComponent, { disableClose: true, width: "70%" });
	}

	getdemand() {
		this.api.getDemand().subscribe({
			next: (res) => {
				if (this.dataSource !== null) {
					this.dataSource = new MatTableDataSource(res);
				}
			},
			error: (err) => {
				alert("error while fetching the records ");
			},
		});
	}
	editdemand(row: any) {
		this.dialog
			.open(DemandesCongesComponent, {
				width: "40%",
				data: row,
			})
			.afterClosed()
			.subscribe((val) => {
				if (val === "update") {
					this.getdemand();
				}
			});
	}

	deletedemand(id: number) {
		this.api.deleteDemand(id).subscribe({
			next: (res) => {
				alert("votre demand a ete effacer");
				this.getdemand();
			},
		});
	}


	ngOnInit(): void {
		this.getdemand();
	}

}
