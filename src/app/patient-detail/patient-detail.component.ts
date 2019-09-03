import { Component, OnInit, NgZone } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

	private patientAddress: string;
  public patient: {};


  constructor(private activatedRoute: ActivatedRoute, private patientService: PatientService, private ngZone: NgZone) {

    this.patientAddress = activatedRoute.snapshot.params['address'];
  }

  ngOnInit() {
    this.patientService.getWSResolvePatient(this.patientAddress).subscribe( obj => {
      console.log(obj);
      this.ngZone.run( () => {this.patient = obj;});
    });
  }

}
