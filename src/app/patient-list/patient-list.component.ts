import { Component, OnInit, NgZone } from '@angular/core';
import { PatientService } from '../patient.service';
import { Observable } from 'rxjs';
import { ContactShimComponent } from '../contact-shim/contact-shim.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  public adressen: any[] = [];
  public filteredAdressen: any[] = [];
  constructor(private patientService: PatientService, private ngZone: NgZone, private shim: MatBottomSheet) { }

	showContactLayer(event: Event, forPatient) {
    event.stopPropagation();
    const bottomSheetRef = this.shim.open(ContactShimComponent, {data: {address: forPatient.adresse}});
    return false;
  }

  updateFilter(query) {
    console.log(query.value);
    this.filteredAdressen = this.adressen.filter( predicate => predicate.name.indexOf(query.value) != -1 );
  }

  ngOnInit() {
    this.patientService.getWSPatienten().subscribe( value => {
      
        
        let adressen = value;
        adressen.forEach( address => {
					this.patientService.getWSResolvePatient(address).subscribe( obj => {
            console.log(obj.adresse);
            this.ngZone.run( () => {this.adressen.push(obj); this.filteredAdressen.push(obj) });
          });
        });
    });
  }

}
