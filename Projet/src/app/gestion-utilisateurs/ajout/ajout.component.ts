import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormsModule, FormBuilder, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ApiService } from "app/services/api.service";
import { ConfirmationComponent } from "../confirmation/confirmation.component";
@Component({
	selector: "app-ajout",
	templateUrl: "./ajout.component.html",
	styleUrls: ["./ajout.component.css"],
})
export class AjoutComponent implements OnInit {
	isChecked = true;
	userForm: FormGroup;
	action: string = "ajouter";
	constructor(private formBuilder: FormBuilder, private api: ApiService,public dialog : MatDialog, private dialogRef: MatDialogRef<AjoutComponent>, @Inject(MAT_DIALOG_DATA) public editUser: any) {}

	ngOnInit(): void {
		this.userForm = this.formBuilder.group({
			nom: ["", Validators.required],
			prenom: ["", Validators.required],
			dentree: ["", Validators.required],
			fonction: ["", Validators.required],
			role: ["", Validators.required],
			rhierarchique: ["", Validators.required],
			mail: ["", Validators.required],
			password: ["", Validators.required],
		});
		if (this.editUser) {
			this.action = "Modifier";
			this.userForm.controls["nom"].setValue(this.editUser.nom);
			this.userForm.controls["prenom"].setValue(this.editUser.prenom);
			this.userForm.controls["dentree"].setValue(this.editUser.ddebut);
			this.userForm.controls["fonction"].setValue(this.editUser.dfin);
			this.userForm.controls["role"].setValue(this.editUser.nbr);
			this.userForm.controls["rhierarchique"].setValue(this.editUser.type);
			this.userForm.controls["mail"].setValue(this.editUser.commentaire);
		}
	}

	addUser() {
		if (!this.editUser) {
			if (this.userForm.valid) {
				this.api.postUser(this.userForm.value).subscribe({
					next: (res) => {
						this.userForm.reset();
						this.dialogRef.close("save");
					},
					error: () => {
						alert("Error");
					},
				});
			}
		} else {
			this.updateUser();
		}
	}

	updateUser() {
		this.dialog
		.open(ConfirmationComponent , {width: "40%",disableClose:true })
		.afterClosed()
		.subscribe((val) => {
			if(val === "del"){
				this.api.putUser(this.userForm.value, this.editUser.id).subscribe({
					next: (res) => {
						this.userForm.reset();
						this.dialogRef.close("update");
					},
					error: () => {
						alert("utilisateur n'est pas modifier");
					},
				});		
			}			
			});
			
		}
}

