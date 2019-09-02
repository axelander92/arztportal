import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const credentials = {
  "userid" : "nlh28466",
  "password" : "z1m9jsl6qcrgvt@v"
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }


  callRestService() {
    console.log("Service!")
    this.http.post('https://dashdb-txn-sbox-yp-lon02-01.services.eu-gb.bluemix.net:8443/dbapi/v3/auth/tokens', "{\"userid\":\"nlh28466\",\"password\":\"z1m9jsl6qcrgvt@v\"}", httpOptions ).subscribe((data) => console.log(data));;
  }

}
