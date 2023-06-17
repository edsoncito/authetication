import { Injectable } from '@nestjs/common';
import { ILogs } from './ILogs';

@Injectable()
export class Logs {
  private strategy: ILogs;

  constructor(strategy: ILogs) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: ILogs): void {
    console.log(strategy)
    this.strategy = strategy;
  }

  public setLogs(valor) {
    return this.strategy.Guardar(valor);
  }

}