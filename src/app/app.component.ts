import { Component } from '@angular/core';
import { MetamaskService } from './metamask.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arztportal';

  constructor(private metamaskService :MetamaskService, public router: Router) {
    metamaskService.getBalance().subscribe( value => {
			console.log(value);
    });
  }

}
