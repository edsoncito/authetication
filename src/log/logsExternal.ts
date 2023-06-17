import { Injectable } from '@nestjs/common';
import { ILogs } from './ILogs';
import { LogService } from './LogService';

@Injectable()
export class LogsExternal implements ILogs {
  constructor(private logsService: LogService) {}

  Guardar(info: string) {
    this.logsService.registerEndpoind({ description: info });
  }
}
