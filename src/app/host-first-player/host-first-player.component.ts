import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from '../app.component';
import {Player} from '../Player';

@Component({
  selector: 'app-host-first-player',
  templateUrl: './host-first-player.component.html',
  styleUrls: ['./host-first-player.component.css']
})
export class HostFirstPlayerComponent implements OnInit {

  @Output() newPlayer = new EventEmitter<Player>();

  playerForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.playerForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)
      ]),
      surname: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)
      ]),
      age: new FormControl(null, [
        Validators.required,
        CustomValidator.numeric,
        Validators.min(15),
        Validators.max(55)
      ]),
      pickup: new FormControl(null, [
        Validators.required,
        CustomValidator.numeric,
        Validators.min(1),
        Validators.max(100)
      ]),
      block: new FormControl(null, [
        Validators.required,
        CustomValidator.numeric,
        Validators.min(1),
        Validators.max(100)
      ]),
      jump: new FormControl(null, [
        Validators.required,
        CustomValidator.numeric,
        Validators.min(1),
        Validators.max(100)
      ]),
      attack: new FormControl(null, [
        Validators.required,
        CustomValidator.numeric,
        Validators.min(1),
        Validators.max(100)
      ]),
      strength: new FormControl(null, [
        Validators.required,
        CustomValidator.numeric,
        Validators.min(1),
        Validators.max(100)
      ])

    });



  }

addPlayer()
{
  const player: Player = {
    name: this.playerForm.value.name,
    surname: this.playerForm.value.surname,
    age: this.playerForm.value.age,
    pickup: Number(this.playerForm.value.pickup),
    block: Number(this.playerForm.value.block),
    jump: Number(this.playerForm.value.jump),
    attack: Number(this.playerForm.value.attack),
    strength: Number(this.playerForm.value.strength)
  }
  this.newPlayer.emit(player);



}
}
