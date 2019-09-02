import { Component, OnInit } from '@angular/core';
import { MetamaskService } from '../metamask.service';
let web3: any;

@Component({
  selector: 'app-patinenten-liste',
  templateUrl: './patinenten-liste.component.html',
  styleUrls: ['./patinenten-liste.component.scss']
})
export class PatinentenListeComponent implements OnInit {

	private web3;

  constructor(private metamask: MetamaskService) { }

  async ngOnInit() {
  }

  async do() {
    this.metamask.getBalance().subscribe( value => {
			console.log(value);
    });
  }

}
