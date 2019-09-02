declare global {
  interface Window { web3: any; }
}

window.web3 = window.web3 || {};

import { Injectable } from '@angular/core';
import { Subscriber, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MetamaskService {

	private web3: any;

  constructor() { 
    this.web3 = window.web3;
  }

	getBalance(): Observable<String> {
    return new Observable( subscriber => {
      this.web3.eth.getBalance(this.web3.currentProvider.selectedAddress, (error, value) => {
        console.log(this.web3.fromWei(value, "ether"));
      });
    });
		
  }

}
