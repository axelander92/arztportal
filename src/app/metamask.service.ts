declare global {
  interface Window { web3: any; }
}

window.web3 = window.web3 || {};

import { Injectable } from '@angular/core';
import { Subscriber, Observable } from 'rxjs';

const ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "lungenarzt",
				"type": "address"
			},
			{
				"name": "patient",
				"type": "address"
			}
		],
		"name": "addPatientToAddressListeVonLungenarzt",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "adresse",
				"type": "address"
			}
		],
		"name": "registerLungenarzt",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "adresse",
				"type": "address"
			}
		],
		"name": "registerPatient",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "patient",
				"type": "address"
			},
			{
				"name": "lungenarzt",
				"type": "address"
			}
		],
		"name": "berechtigeLungenarztFuerPatient",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "lungenarzt",
				"type": "address"
			}
		],
		"name": "getPatientenAdressListeVonLungenarzt",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "patient",
				"type": "address"
			},
			{
				"name": "schluessel",
				"type": "string"
			}
		],
		"name": "setDBSchluesselFuerPatient",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "adresse",
				"type": "address"
			}
		],
		"name": "getDBSchluesselFuerPatient",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "patient",
				"type": "address"
			},
			{
				"name": "sollwert",
				"type": "uint256"
			}
		],
		"name": "setSollwertFuerPatient",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "patienten",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "adresse",
				"type": "address"
			},
			{
				"name": "lungenarztAdresse",
				"type": "address"
			},
			{
				"name": "sollwert",
				"type": "uint256"
			},
			{
				"name": "maxwert",
				"type": "uint256"
			},
			{
				"name": "dbschluessel",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "patient",
				"type": "address"
			},
			{
				"name": "maxwert",
				"type": "uint256"
			}
		],
		"name": "setMaxwertFuerPatient",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "lungenaerzte",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "adresse",
				"type": "address"
			},
			{
				"name": "patienten",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

@Injectable({
  providedIn: 'root'
})
export class MetamaskService {

	private web3: any;
  private contractAddress: string;
  private loggedInAddress: string;

  constructor() { 
    this.web3 = window.web3;
    this.contractAddress = '0x82e70519cd51dd635c844b4056435258f7abaa9a';
  }

  getWalletAddress(): string {
    return this.web3.currentProvider.selectedAddress;
  }

  getContract(): any {
    let returnValue = this.web3.eth.contract(ABI).at(this.contractAddress);
    return returnValue;
  }

  parseResult(values, methodName) {
    let methodDefinition = ABI.find( predicate => predicate.name === methodName);
    let obj = {};
    console.log(methodDefinition, methodName);
		methodDefinition.outputs.forEach((output, index) => {
			obj[output.name] = values[index];
    })
    return obj;
  }

  setLoggedInAddress(address: string) {
    this.loggedInAddress = address;
  }

	getBalance(): Observable<String> {
    return new Observable( subscriber => {
      this.web3.eth.getBalance(this.web3.currentProvider.selectedAddress, (error, value) => {
        console.log(this.web3.fromWei(value, "ether").toString());
      });
    });
		
  }

}
