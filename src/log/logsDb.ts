import {  Injectable } from '@nestjs/common';
import { ILogs } from './ILogs';
import { LogService } from './LogService';

@Injectable()
export class LogsCa implements ILogs {
  constructor(private logsService: LogService) {}

  Guardar(info: string) {
    this.logsService.register({ description: info });
  }
}
