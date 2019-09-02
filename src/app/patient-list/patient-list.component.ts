import { Component, OnInit, NgZone } from '@angular/core';
import { PatientService } from '../patient.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

	public adressen: any[] = [];
  constructor(private patientService: PatientService, private ngZone: NgZone) { }

  ngOnInit() {
    this.patientService.getWSPatienten().subscribe( value => {
      
        
        let adressen = value;
        adressen.forEach( address => {
					this.patientService.getWSResolvePatient(address).subscribe( obj => {
            console.log(obj.adresse);
            this.ngZone.run( () => {this.adressen.push(obj); });
          });
        });
    });
  }

}
