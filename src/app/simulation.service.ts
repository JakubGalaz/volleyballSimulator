import {Injectable} from '@angular/core';
import {Player} from './Player';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  firstStrength;
  secondStrength;
  thirdStrength;
  fourthStrength;
  firstStrengthStart;
  secondStrengthStart;
  thirdStrengthStart;
  fourthStrengthStart;

  firstTeamSet: number;
  secondTeamSet: number;
  firstTeamSetPoints: number[];
  secondTeamSetPoints: number[];
  endPoints: number;

  constructor() {
    this.firstTeamSet = 0;
    this.secondTeamSet = 0;
    this.endPoints = 21;
  }


  teamOverall(players: Player[]) {
    this.firstStrength = players[0].strength; // przypisanie wartości pola w obiekcie reprezentujacego wytzymałość pierwszego zawodnika do drugiej zmiennej pomocniczej
    this.secondStrength = players[1].strength; // przypisanie wartości pola w obiekcie reprezentujacego wytzymałość drugiego zawodnika  do drugiej zmiennej pomocniczej
    this.thirdStrength = players[2].strength; //  przypisanie wartości pola w obiekcie reprezentujacego wytzymałość trzeciego zawodnika do drugiej zmiennej pomocniczej
    this.fourthStrength = players[3].strength; //  przypisanie wartości pola w obiekcie reprezentujacego wytzymałość czwartego zawodnika do drugiej zmiennej pomocniczej

   this.firstStrengthStart = this.firstStrength;  // przypisanie wartości reprezentującej wytrzymałość pierwszego zawonika do drugiej zmiennej
   this.secondStrengthStart = this.secondStrength; // przypisanie wartości reprezentującej wytrzymałość drugiego zawonika do drugiej zmiennej
    this.thirdStrengthStart = this.thirdStrength; // przypisanie wartości reprezentującej wytrzymałość trzeciego zawonika do drugiej zmiennej
    this.fourthStrengthStart = this.fourthStrength; // przypisanie wartości reprezentującej wytrzymałość czwartego zawonika do drugiej zmiennej

    this.firstTeamSetPoints = undefined;
    this.secondTeamSetPoints = undefined;

    var i: number;
    i = 0;
    this.firstTeamSet = 0; // zmienna reprezentjąca zwycięskie sety pierwszej drużyny
    this.secondTeamSet = 0; // zmienna reprezentjąca zwycięskie sety drugiej drużyny

    while (true) {
      i++;
      if (this.firstTeamSet === 2) { //jeśli pierwsza drużyna ma 2 wygrane sety
        break; // zakończ
      }

      if (this.secondTeamSet === 2) { //jeśli druga drużyna ma 2 wygrane sety
        break; // zakończ
      }

      if(i === 3){ // jeśli rozegrany zostaje trzeci mecz
        this.endPoints = 15;  // zmień punkty końćzące rozgrwyję na 15
      }
      this.getSet(players); // wywołanie funkcji odpowiedizalnej za pobanie wyniku seru


    }
    i = 0;
    this.endPoints = 21;



  //  console.log('Wynik: ' + this.firstTeamSet + ' : ' + this.secondTeamSet);


  }


  getSet(players: Player[]) {
    var firstResult = 0; // wynik setu pierwzej drużyny
    var secondResult = 0; // wynik setu drugiej drużyny
    var end = true; //zmienna kończąca pętle

    while (end) {
      if (this.getPoint(players) === 0) { // jeśli punkt przyznany pierwszej drużynie
        firstResult++; // zwiększ licznik drużyny pierwszej
      } else { // w przeciwnym razie
        secondResult++; //zwiększ licznik drugiej drużyny
      }

      if (firstResult >= this.endPoints || secondResult >= this.endPoints) { // jeśli piersza lub druga drużyna będzie miała liczbę punktów większą niż endpoints ( punkty kończące rozgrywkę w przypadku pierwszych dwóch setów będzie to 21, w przypadku rozegrania 3 tkz.tie break liczba punktów to 15)
        if (firstResult >= secondResult + 2 || secondResult >= firstResult  + 2) { // jeśli wynik któejś z drużyn będzie o 2 większy niż tej drugiej
          end = false; // zakończ pętle
        }
      }
    }

 //   console.log('wynik 1 set ' + firstResult);
 //   console.log('wynik 2 set' + secondResult);

    if(this.firstTeamSetPoints === undefined){ // jeśli liczba punktów dla danego setu dla pierwszej drużyny będzie niezdefiniowana
      this.firstTeamSetPoints = [firstResult]; // jeśli liczba punktów dla danego setu dla drugiej drużyny będzie niezdefiniowana
      this.secondTeamSetPoints = [secondResult];
    } else { // jeśli liczba punktów dla danego setu dla drugiej drużyny będzie zdefiniowana
      this.firstTeamSetPoints.push(firstResult); // dodaj wynik dla pierwszej drużyny dla kolejenego setu
      this.secondTeamSetPoints.push(secondResult);  // dodaj wynik dla drugiej drużyny dla kolejenego setu
    }

    if (firstResult > secondResult) { // jeśli pierwsza drużyna zdobędzie wiecej punktów w secie
      this.firstTeamSet = this.firstTeamSet + 1; // dodaj wygranego seta do pierwszej drużyny
    } else { // w przeciwnym wypadku
      this.secondTeamSet = this.secondTeamSet + 1; //dodaj zwycięskiego seta dla drugiej drużyny
    }

    this.firstStrength = this.firstStrength * 1.1;  // odzyskiwanie wytrzymałości pierwszego zawodnika po skończonym secie
    this.secondStrength = this.secondStrength * 1.1;  // odzyskiwanie wytrzymałości drugiego zawodnika po skończonym secie
    this.thirdStrength = this.thirdStrength * 1.1;  // odzyskiwanie wytrzymałości drugiego zawodnika po skończonym secie
    this.fourthStrength = this.firstStrength * 1.1;  // odzyskiwanie wytrzymałości drugiego zawodnika po skończonym secie

  }


  getPoint(players: Player[]) {
    const playerOne = this.playerOverall(players[0]); // zmienna przechowująca ogołną notę pierwszego zawodnika
    const playerTwo = this.playerOverall(players[1]); // zmienna przechowująca ogołną notę drugiego zawodnika


    const firstPower = playerOne * 10 * this.firstStrength + playerTwo * 10 * this.secondStrength; // Oliczanie siły pierwszej drużyny

    const playerThree = this.playerOverall(players[2]); // zmienna przechowująca ogołną notę trzeciego zawodnika
    const playerFour = this.playerOverall(players[3]); // zmienna przechowująca ogołną notę czwartego zawodnika

    const secondPower = playerThree * 10 * this.thirdStrength + playerFour * 10 * this.fourthStrength; // Oliczanie siły drugiej drużyny

    //  console.log('Pierwsza drużyna' + firstPower);
    // console.log('Druga druzżyna' + secondPower);

    const sum = firstPower + secondPower; // suma mocy obu drużyn
    const randomNumber = Math.floor(Math.random() * sum) + 1; // symulacja zdobytego punktu
    // console.log('lsowanie' + randomNumber);

    this.firstStrength = this.firstStrength * 0.98 + (0.01 * this.firstStrengthStart); // zmiana wytrzymałości zawodnika pierwszego
    this.secondStrength = this.secondStrength * 0.98  + (0.01 * this.secondStrengthStart); // zmiana wytrzymałości zawodnika drugiego
    this.thirdStrength = this.thirdStrength * 0.98  + (0.01 * this.thirdStrengthStart); // zmiana wytrzymałości zawodnika trzeciego
    this.fourthStrength = this.firstStrength * 0.98  + (0.01 * this.fourthStrengthStart); // zmiana wytrzymałości zawodnika czwartego
/*
    console.log('Wytrzymałość1: ' + this.firstStrength);
    console.log('Wytrzymałość2: ' + this.secondStrength);
    console.log('Wytrzymałość3: ' + this.thirdStrength);
    console.log('Wytrzymałość4: ' + this.fourthStrength);
    console.log('moc1: ' + firstPower);
    console.log('moc2: ' + secondPower);

*/


    if (randomNumber < firstPower) {
      return 0;
    } else {
      return 2;
    }

//przyznanie punktu drużynie



  }

  playerOverall(player: Player): number {
    const overall = player.jump + player.pickup + player.block + player.attack;
    return overall;
  }
}
