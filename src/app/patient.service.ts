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
