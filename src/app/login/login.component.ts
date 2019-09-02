import { Component, OnInit, NgZone } from '@angular/core';
import { Form } from '@angular/forms';
import { LoginService } from '../login.service';
import { DatabaseService } from '../database.service';
import { MetamaskService } from '../metamask.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	private address: string;

  constructor(private metamask: MetamaskService, private loginService: LoginService, private router: Router, private ngZone: NgZone, private database: DatabaseService) { }

  ngOnInit() {
    this.address = this.metamask.getWalletAddress();
  }

  login() {
    this.loginService.wsLogin(this.address).subscribe( value => {
      if(value===true) {
        this.ngZone.run( () => {
          this.router.navigate(['patienten']);
        });

      } else {
        alert('no valid adress provided')
      }

    });
  }

  test() {
    this.database.callRestService();
  }

}
