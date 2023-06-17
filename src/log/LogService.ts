import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LogEntity } from './LogEntity';
import { Repository } from 'typeorm';
import { Encrypt } from 'src/encrypt/encrypt';
import { EncryptBase64 } from 'src/encrypt/encryptBase64';
import { EncryptBinary } from 'src/encrypt/encryptBinary';
import { EncryptHex } from 'src/encrypt/encryptHex';
import { ILogs } from './ILogs';
import { Logs } from './logs';

@Injectable()
export class LogService {

  private strategy: ILogs;

  constructor(
    @InjectRepository(LogEntity)
    // strategy: ILogs,
    private readonly logsRepository: Repository<LogEntity>,
    // strategy: ILogs// private readonly encrypt: Encrypt,
  ) { 
    // this.strategy = strategy;
  }


  // constructor(strategy: ILogs) {
  //   this.strategy = strategy;
  // }

  // public setStrategy(strategy: ILogs): void {
  //   console.log(strategy)
  //   this.strategy = strategy;
  // }

  public setLogs(valor) {
    return this.strategy.Guardar(valor);
  }

  private readonly encrypt: Encrypt;

  async changeLogEncrypt(request) {
    return await this.changeEncrypt(request.typeEncript);
  }

  public changeEncrypt(type) {
    console.log(type);
    switch (type) {
      case 'encriptBase':
        this.encrypt.setStrategy(new EncryptBase64());
        break;
      case 'encriptBinary':
        this.encrypt.setStrategy(new EncryptBinary());
        break;
      case 'encriptHex':
        this.encrypt.setStrategy(new EncryptHex());
        break;
      default:
        throw new BadRequestException();
    }
    return type;
  }

  // private changeLog(type) {
  //   switch (type) {
  //     case 'encriptBase':
  //       this.encrypt.setStrategy(new EncryptBase64());
  //       break;
  //     case 'encriptBinary':
  //       this.encrypt.setStrategy(new EncryptBinary());
  //       break;
  //     case 'encriptHex':
  //       this.encrypt.setStrategy(new EncryptHex());
  //       break;
  //     default:
  //       throw new BadRequestException();
  //   }
  // }

  async register(request) {
    return await this.logsRepository.save(request);
  }

  async registerEndpoind(request) {
    return await this.logsRepository.save(request);
  }

  async getAll() {
    return await this.logsRepository.find();
  }
}
