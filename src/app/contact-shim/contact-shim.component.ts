import { Component, Inject, OnInit } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheet} from '@angular/material/bottom-sheet';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-contact-shim',
  templateUrl: './contact-shim.component.html',
  styleUrls: ['./contact-shim.component.scss']
})
export class ContactShimComponent implements OnInit {
  private patientAddress: string;
  private patient: any;
  
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) forPatient: any, private bottomSheet: MatBottomSheet, patientService: PatientService) {
    this.patientAddress = forPatient.address;
    patientService.getWSResolvePatient(this.patientAddress).subscribe( patient => {
      this.patient = patient;
    })
  }

	phone() {
    if ( this.patient ) {
      alert(this.patient.name + ' gets called');
    }
    this.bottomSheet.dismiss();
  }

  mail() {
    if ( this.patient ) {
      alert(this.patient.name + ' gets written a mail');
    }
    this.bottomSheet.dismiss();
  }

  ngOnInit() {
  }

}
