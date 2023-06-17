import { Injectable } from '@nestjs/common';
import { IEncrypt } from './IEncrypt';

@Injectable()
export class Encrypt {
  private strategy: IEncrypt;

  constructor(strategy: IEncrypt) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: IEncrypt): void {
    console.log(strategy)
    this.strategy = strategy;
  }

  public setEncrypt(valor) {
    return this.strategy.encrypt(valor);
  }

  public setDecrypt(pass, passdb) {
    return this.strategy.decrypt(pass, passdb);
  }
}
