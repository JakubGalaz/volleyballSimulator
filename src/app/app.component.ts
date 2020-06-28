import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatAccordion} from '@angular/material/expansion';
import {Player} from './Player';
import {SimulationService} from './simulation.service';
import {Simulation} from './Simulation';
import {Match} from './Match';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  title = 'ComputerSimulation';
  display = 0;
  playerArray: Player[];

  testForm: FormGroup;

constructor(public simulationService: SimulationService) {


}

  ngOnInit(): void {
    this.testForm = new FormGroup({
      numberControl: new FormControl(null, [
        Validators.required,
      ])});

  }

  onNewPlayer(player: Player) {
    if (this.playerArray === undefined) {
      this.playerArray = [player];
    } else {
      this.playerArray.push(player);
      this.display = this.display + 1;
    }
    console.log(this.playerArray);


  }


  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }


  simulation(players: Player[]) {
    let iteration = this.testForm.value.numberControl;
    console.log(iteration);

    let simulation: Simulation;
 //   iteration = 10000;

    simulation = {
      playerOne: this.playerArray[0],
      playerTwo: this.playerArray[1],
      playerThree: this.playerArray[2],
      playerFour: this.playerArray[3],
      iterations: iteration,

    };

    var wineOne = 0;
    var  winTwo = 0;

    for (let i = 0; i < iteration; i++) {
      this.simulationService.teamOverall(players);
      if(this.simulationService.firstTeamSet > this.simulationService.secondTeamSet){
        wineOne = wineOne + 1;
      }else{
        winTwo = winTwo + 1;
      }

    }

    let match: Match;
    match = {
      setOneA: this.simulationService.firstTeamSetPoints[0],
      setOneB: this.simulationService.secondTeamSetPoints[0],
      setTwoA: this.simulationService.firstTeamSetPoints[1],
      setTwoB: this.simulationService.secondTeamSetPoints[1],
      setThreeA: this.simulationService.firstTeamSetPoints[2],
      setThreeB: this.simulationService.secondTeamSetPoints[2]
    }


    simulation.winOne = wineOne;
    simulation.winTwo = winTwo;



    console.log('Symulacja:  ' + JSON.stringify(simulation))



  }


}


export class CustomValidator {
  static numeric(control: AbstractControl) {
    const val = control.value;

    if (val === null || val === '') { return null; }

    if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) {
      return {invalidNumber: true};
    }

    return null;
  }


}
