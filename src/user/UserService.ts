import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EncryptBase64 } from 'src/encrypt/encryptBase64';
import { UserEntity } from 'src/user/UserEntity';
import { Repository } from 'typeorm';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { LogService } from 'src/log/LogService';
import { Encrypt } from 'src/encrypt/encrypt';
import { Logs } from 'src/log/logs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    // @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private logsService: LogService,
    // private readonly logs: Logs,
  ) {}

  private readonly encrypt: Encrypt;

  async findUser(username) {
    return await this.usersRepository.find({ where: { username } });
  }

  async register(request) {
    try {
      // this.logger.log('info', 'Usuario creado');
      this.logsService.setLogs({ description: 'Usuario creado' });
      const password = this.encrypt.setEncrypt(request.password);
      console.log(password);
      return await this.usersRepository.save({
        ...request,
        password,
      });
    } catch (error) {
      // this.logger.error(`Error al registrar: ${error}`);
      this.logsService.setLogs({ description: `Error al registrar: ${error}` });
    }
  }

  async getAll() {
    return await this.usersRepository.find();
  }
}
