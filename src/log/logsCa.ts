import { Inject, Injectable } from '@nestjs/common';
import { ILogs } from './ILogs';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class LogsCa implements ILogs {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  Guardar(info: string) {
    this.logger.log('info', info);
  }
}
