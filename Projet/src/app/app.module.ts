import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { HistoryComponent } from "./history/history.component";
import { DatePipe } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatSliderModule } from "@angular/material/slider";
import { MatInputModule } from "@angular/material/input";
import { ListesDesCongesComponent } from "./GC/gestion-des-conges/listes-des-conges/listes-des-conges.component";
import { DemandesCongesComponent } from "./GC/gestion-des-conges/demandes-conges/demandes-conges.component";
import { GestionDesCongesComponent } from "./GC/gestion-des-conges/gestion-des-conges.component";
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatCardModule } from "@angular/material/card";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { GestionUtilisateursComponent } from "./gestion-utilisateurs/gestion-utilisateurs.component";
import { AjoutComponent } from "./gestion-utilisateurs/ajout/ajout.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmationComponent } from './gestion-utilisateurs/confirmation/confirmation.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		ComponentsModule,
		RouterModule,
		AppRoutingModule,
		MatSliderModule,
		MatInputModule,
		MatDialogModule,
		MatIconModule,
		MatButtonModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatFormFieldModule,
		MatSelectModule,
		MatTableModule,
		ReactiveFormsModule,
		MatPaginatorModule,
		MatSortModule,
		MatCardModule,
		MatToolbarModule,
		MatSlideToggleModule,
	],

	declarations: [
		AppComponent,
		AdminLayoutComponent,
		CalendarComponent,
		HistoryComponent,
		ListesDesCongesComponent,
		GestionUtilisateursComponent,
		DemandesCongesComponent,
		GestionDesCongesComponent,
		AjoutComponent,
  LoginComponent,
  ForgotPasswordComponent,
  ConfirmationComponent,
  AdminComponent,
	],

	providers: [DatePipe, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatDialogRef, useValue: {} }],
	bootstrap: [AppComponent],
})
export class AppModule {}
