import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

	private patientAddress: string;

  constructor(private activatedRoute: ActivatedRoute) { 

    this.patientAddress = activatedRoute.snapshot.params['address'];
  }

  ngOnInit() {
  }

}
