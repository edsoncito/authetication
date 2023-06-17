import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogEntity } from './LogEntity';
import { LogService } from './LogService';
import { LogController } from './LogController';

@Module({
  imports: [TypeOrmModule.forFeature([LogEntity])],
  providers: [LogService],
  controllers: [LogController],
  exports: [LogService],
})
export class LogModule {}
