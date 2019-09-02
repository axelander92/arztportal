import { Component } from '@angular/core';
import { MetamaskService } from './metamask.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arztportal';

  constructor(private metamaskService :MetamaskService) {
    metamaskService.getBalance().subscribe( value => {
			console.log(value);
    });
  }

}
