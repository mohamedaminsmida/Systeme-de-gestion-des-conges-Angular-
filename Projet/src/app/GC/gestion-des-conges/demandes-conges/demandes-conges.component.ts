import { Component, Inject, inject, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormGroup, FormsModule, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "app/services/api.service";

@Component({
	selector: "app-demandes-conges",
	templateUrl: "./demandes-conges.component.html",
	styleUrls: ["./demandes-conges.component.css"],
})
export class DemandesCongesComponent implements OnInit {
	options = ["Congé payé", "Congé sans payé", "Congé parental", "Maladie"];
	date_debut;
	date_fin;
	nbr = 0;
	dated;
	datef;
	actionBtn: string = "soumettre";
	description: string;
	demandForm!: FormGroup;
	constructor(
		private datePipe: DatePipe,
		private formBuilder: FormBuilder,
		private api: ApiService,
		private dialogRef: MatDialogRef<DemandesCongesComponent>,
		@Inject(MAT_DIALOG_DATA) public editDemand: any
	) {}
	postdemand() {
		if (!this.editDemand) {
			if (this.demandForm.valid) {
				this.api.postDemand(this.demandForm.value).subscribe({
					next: (res) => {
						alert("Demand evoyee avec succee");
						this.demandForm.reset();
						this.dialogRef.close("save");
					},
					error: () => {
						alert("Error");
					},
				});
			}
		} else {
			this.updateDemand();
		}
	}
	updateDemand() {
		this.api.putDemand(this.demandForm.value, this.editDemand.id).subscribe({
			next: (res) => {
				alert("demand a ete modifier avec succee");
				this.demandForm.reset();
				this.dialogRef.close("update");
			},
			error: () => {
				alert("demand n'est pas modifier");
			},
		});
	}

	ngOnInit(): void {
		this.demandForm = this.formBuilder.group({
			nom: ["", Validators.required],
			prenom: ["", Validators.required],
			ddebut: ["", Validators.required],
			dfin: ["", Validators.required],
			nbr: ["", Validators.required],
			type: ["", Validators.required],
			commentaire: ["", Validators.required],
		});
		if (this.editDemand) {
			this.actionBtn = "Modifier";
			this.demandForm.controls["nom"].setValue(this.editDemand.nom);
			this.demandForm.controls["prenom"].setValue(this.editDemand.prenom);
			this.demandForm.controls["ddebut"].setValue(this.editDemand.ddebut);
			this.demandForm.controls["dfin"].setValue(this.editDemand.dfin);
			this.demandForm.controls["nbr"].setValue(this.editDemand.nbr);
			this.demandForm.controls["type"].setValue(this.editDemand.type);
			this.demandForm.controls["commentaire"].setValue(this.editDemand.commentaire);
		}
	}

	diff() {
		this.dated = new Date(this.date_debut).getTime();
		this.datef = new Date(this.date_fin).getTime();
		this.nbr = (this.datef - this.dated) / 86400000;
	}
}
