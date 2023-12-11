import { Component, OnInit, Output, ViewChild ,EventEmitter} from "@angular/core";
import { AjoutComponent } from "./ajout/ajout.component";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { ApiService } from "app/services/api.service";
import { AuthService } from "app/services/auth.service";
import { ConfirmationComponent } from "./confirmation/confirmation.component";



@Component({
	selector: "app-gestion-utilisateurs",
	templateUrl: "./gestion-utilisateurs.component.html",
	styleUrls: ["./gestion-utilisateurs.component.css"],
})
export class GestionUtilisateursComponent implements OnInit {
	displayedColumns: string[] = ["statut", "nom", "prenom", "dentree", "fonction", "role", "rhierarchique", "mail", "action"];
	dataSource: MatTableDataSource<any>;
	getUser() {
		this.api.getUser().subscribe({
			next: (res) => {
				if (this.dataSource !== null) {
					this.dataSource = new MatTableDataSource(res);
					console.log(res);
				}
			},
			error: (err) => {
				alert("error while fetching the records ");
			},
		});
	}

	openDialog() {
		this.dialog
		.open(AjoutComponent, { width: "40%" ,disableClose:true})
		.afterClosed()
		.subscribe((val) => {
			if(val === "save"){
				this.getUser()
			}
		});
	}

  @Output() dataEvent = new EventEmitter<number>();
  

	confirm(id : any){
		this.dialog
		.open(ConfirmationComponent, { width: "40%"  ,disableClose:true }  )
		.afterClosed()
		.subscribe((val) => {
				if(val === "del"){
						this.api.deleteUser(id).subscribe({
							next: (res) => {
								alert("Un utilistaeur a ete effacer avec succès");
								
							},
						});
					this.getUser()
				}
		});
		
	}
	

	editUser(row: any) {
		this.dialog
			.open(AjoutComponent, {
				width: "40%",
				data: row,
				disableClose:true
			})
			.afterClosed()
			.subscribe((val) => {
				if(val === "update"){
					this.getUser();		
				}			
			});
	}

	

	constructor(public dialog: MatDialog, private api: ApiService, private auth: AuthService) {}
	logout(): void {
		this.auth.logout();
	}

	ngOnInit(): void {
		this.getUser();
	}
}
