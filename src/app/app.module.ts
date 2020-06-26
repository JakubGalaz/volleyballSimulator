import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import { HostFirstPlayerComponent } from './host-first-player/host-first-player.component';
import { MyPlayerComponent } from './my-player/my-player.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {SimulationService} from './simulation.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    HostFirstPlayerComponent,
    MyPlayerComponent,



  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    NgbModule
  ],
  providers: [SimulationService],
  bootstrap: [AppComponent]
})
export class AppModule {




}
