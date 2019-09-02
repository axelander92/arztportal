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

  getWSResolvePatient(patientAddress: string): Observable<any> {
		return new Observable( subscriber => {
			this.metamask.getContract().patienten(patientAddress, (error, value) => {
        if (!error) {
          let parsedValues = this.metamask.parseResult(value, 'patienten');
          subscriber.next(parsedValues);
          subscriber.complete();
        } else {
          subscriber.next({});
					subscriber.error();
        }
      });
    });
  }

  getWSPatienten(): Observable<string[]> {
    return new Observable( subscriber => {
      this.metamask.getContract().getPatientenAdressListeVonLungenarzt(this.metamask.getLoggedInAddress(), (error, value) => {
        if(!error) {
          subscriber.next(value.split(';'));
          subscriber.complete();
        } else {
          subscriber.next([]);
          subscriber.error();
        }
      });
    });
    
  }

}
