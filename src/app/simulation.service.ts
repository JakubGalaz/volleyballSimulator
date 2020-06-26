 import { Injectable } from '@angular/core';
import {Player} from './Player';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
firstStrength;
secondStrength;
thirdStrength;
fourthStrength;

  constructor() { }

  teamOverall(players: Player[]) {
    this.firstStrength = players[0].strength;
    this.secondStrength = players[1].strength;
    this.thirdStrength = players[2].strength;
    this.fourthStrength = players[3].strength;


    this.getSet(players)

  }


  getSet(players: Player[]) {
    var firstResult = 0;
    var secondResult = 0;
    var end = true;

    while (end) {
      if (this.getPoint(players) === 0) {
        firstResult++;
      } else {
        secondResult++;
      }

      if (firstResult >= 21 || secondResult >= 21) {
        if (firstResult  >= secondResult - 2 || secondResult >= firstResult - 2) {
          end = false;
        }
      }
    }

    console.log('wynik 1 ' + firstResult);
    console.log('wynik 2 ' + secondResult);
  }






  getPoint(players: Player[]){
    const playerOne = this.playerOverall(players[0]);
    const playerTwo = this.playerOverall(players[1]);

    const firstPower = playerOne * 10 *  this.firstStrength + playerTwo * 10 *  this.secondStrength;

    const playerThree =  this.playerOverall(players[2]);
    const playerFour = this.playerOverall(players[3]);

    const secondPower = playerThree * 10 * this.thirdStrength + playerFour * 10 * this.fourthStrength;

    console.log('Pierwsza drużyna' + firstPower);
    console.log('Druga druzżyna' + secondPower);

    const sum = firstPower + secondPower;
    const randomNumber = Math.floor(Math.random() * sum) + 1;
    console.log('lsowanie' + randomNumber);

    if(randomNumber < firstPower){
      return 0;
    }else {
      return 2};

  }

  playerOverall(player: Player): number {
  const overall  =  player.jump + player.pickup + player.block + player.attack;
  return overall;
  }
}
