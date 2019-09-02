import { Component, OnInit, NgZone } from '@angular/core';
import { PatientService } from '../patient.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

	public adressen: string[];

  constructor(private patientService: PatientService, private ngZone: NgZone) { }

  ngOnInit() {
    this.patientService.getWSPatienten().subscribe( value => {
      this.ngZone.run( () => {
        console.log(value);
        this.adressen = value;
        
      })
    });
  }

}
