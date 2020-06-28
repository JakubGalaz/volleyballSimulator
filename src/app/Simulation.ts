import {Player} from './Player';
import {Match} from './Match';

export class Simulation {
  constructor(

   public playerOne?: Player,
   public playerTwo?: Player,
   public playerThree?: Player,
   public playerFour?: Player,

   public iterations?: number,
   public winOne?: number,
   public winTwo?: number,
   public match?: Match[],




  ) {}
}
