import { Injectable } from '@angular/core';
import { MetamaskService } from './metamask.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private metamask: MetamaskService) { }

  wsLogin(lungenarztAdresse: string): Observable<boolean> {
		return new Observable( subscriber => {
      this.metamask.getContract().lungenaerzte(lungenarztAdresse, (error, value) => {
        console.log(error, value);
        if (!error) {
          subscriber.next(true);
          this.metamask.setLoggedInAddress(lungenarztAdresse);
          subscriber.complete();
        } else {
          subscriber.next(false);
          subscriber.error();
        }
      });  
    });
		
  }
}
