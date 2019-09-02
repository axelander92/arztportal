import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import { PatientListComponent } from './patient-list/patient-list.component';
import { LoginComponent } from './login/login.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { ContactShimComponent } from './contact-shim/contact-shim.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    LoginComponent,
    PatientDetailComponent,
    ContactShimComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatTabsModule
  ],
  providers: [],
  entryComponents: [ContactShimComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
