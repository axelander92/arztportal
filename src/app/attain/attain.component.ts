import { Component, OnInit, NgZone } from '@angular/core';
import { PatientService } from '../patient.service';
import { MetamaskService } from '../metamask.service';

@Component({
  selector: 'app-attain',
  templateUrl: './attain.component.html',
  styleUrls: ['./attain.component.scss']
})
export class AttainComponent implements OnInit {

	private lungenarztAdresse: string;
  private checkId: any;
  private patientListLength: number;
  private newPatientName: string;
  private isRegistered = false;
  private isError = false;
  private attempts = 10;
  private attempt = 0;

  constructor(private patientenService: PatientService, private metamask: MetamaskService, private ngZone: NgZone) { }

  ngOnInit() {
    this.lungenarztAdresse = this.metamask.getWalletAddress();
    this.patientenService.getWSPatienten().subscribe( value => {
      this.patientListLength = value.length;
      this.checkId = setInterval(() => { this.checkForCompletion() }, 1000);
    });
  }

  checkForCompletion() {
    this.ngZone.run( () => {
      console.log('attempt', this.attempt, this.attempts);
      if ( this.attempts == this.attempt ) {
        clearInterval(this.checkId);
        this.isError = true;
      } else {
        this.attempt++;
      }
      if ( this.attempt == 5 ) {
        this.isError = true;
        clearInterval(this.checkId);
        return;
      }
        
    });
    
    this.patientenService.getWSPatienten().subscribe( value => {
      
			if (value.length > this.patientListLength) {
        clearInterval(this.checkId);
        this.patientenService.getWSResolvePatient(value[value.length-1]).subscribe( value => {
          this.ngZone.run( () => {
            this.newPatientName = value.name;
          
            this.isRegistered = true;  
          });
          
        });
      }
    });
  }

}
