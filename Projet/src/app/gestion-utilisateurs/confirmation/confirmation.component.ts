import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  
  
 
  deleteUser(){
    this.dialogRef.close("del")
  }

  constructor(private api: ApiService ,private dialogRef: MatDialogRef<ConfirmationComponent>, ) { }

  ngOnInit(): void {
    
  }

}
