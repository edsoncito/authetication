import { Module } from '@nestjs/common';
import { Encrypt } from './encrypt';

@Module({
  imports: [],
  providers: [Encrypt],
  controllers: [],
  exports: [Encrypt],
})
export class EncryptModule {}
