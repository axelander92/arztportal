import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

	private from: String;

  constructor(fromLungenarzt: String) {
    this.from = fromLungenarzt;
  }

  getWSPatienten(): Observable<String[]> {
    return new Observable( (subscriber) => {
			if ( this.from == '0x00')  {
        subscriber.next([]);
        subscriber.complete();
      } else {
        subscriber.error();
      }
    });
  }

}
