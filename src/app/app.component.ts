import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatAccordion} from '@angular/material/expansion';
import {Player} from './Player';
import {SimulationService} from './simulation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild(MatAccordion) accordion: MatAccordion;
  title = 'ComputerSimulation';
  display = 0;
  playerArray: Player[];

constructor(public simulationService: SimulationService) {
}

  ngOnInit(): void {


  }

  onNewPlayer(player: Player){
    if(this.playerArray === undefined){
      this.playerArray = [player];
    }else{
      this.playerArray.push(player);
   this.display = this.display + 1;
    }
    console.log(this.playerArray);


  }



}


export class CustomValidator {
  static numeric(control: AbstractControl) {
    let val = control.value;

    if (val === null || val === "") return null;

    if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/))
      return {invalidNumber: true};

    return null;
  }


}
