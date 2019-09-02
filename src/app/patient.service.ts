import { Injectable, ɵConsole } from '@angular/core';
import { Observable } from 'rxjs';
import { MetamaskService } from './metamask.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

	private from: String;

  constructor(private metamask: MetamaskService) {
    
  }

  getWSPatienten() {
    this.metamask.getContract().getPatientenAdressListeVonLungenarzt( (error, value) => {
			console.log(error, value);			
    });
  }

}
