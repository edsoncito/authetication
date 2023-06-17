import { Body, Controller, Get } from '@nestjs/common';
import { Encrypt } from 'src/encrypt/encrypt';
import { EncryptBase64 } from 'src/encrypt/encryptBase64';
import { LogService } from './LogService';

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}
  // private readonly encrypt: Encrypt = new EncryptBase64();

  @Get('changeLogEncrypt')
  async(@Body() request) {
    return this.logService.changeLogEncrypt(request);
  }

  @Get('register')
  async registerLog(@Body() request) {
    return this.logService.register(request);
  }

  @Get()
  async getAllLog() {
    return await this.logService.getAll();
  }
}
