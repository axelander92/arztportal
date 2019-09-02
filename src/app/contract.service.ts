import { Injectable } from '@angular/core';
import { MetamaskService } from './metamask.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private web3: any;
  private contract: any;

  constructor(private metamask: MetamaskService) {

			this.web3 = window.web3;
			this.contract = this.metamask.getContract();
   }

  

}
