import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

	private endpoint: string;

  constructor(private http: HttpClient) { 
    this.endpoint = 'https://dashdb-txn-sbox-yp-lon02-01.services.eu-gb.bluemix.net:8443/dbapi/v3/';
  }


  callRestService() {
    console.log("Service!");
    let payload = {
    	userid:"nlh28466",
    	password: "z1m9jsl6qcrgvt@v"
     };
    fetch('https://dashdb-txn-sbox-yp-lon02-01.services.eu-gb.bluemix.net:8443/dbapi/v3/auth/tokens', {
      body: JSON.stringify(payload),
      method: 'POST',
    }).then( response => response.json()).then( value => {
      console.log(value);
    });
  }

}
