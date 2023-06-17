import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/UserEntity';
import { UserModule } from './user/UserModule';
import { AuthModule } from './auth/AuthModule';
import { WinstonModule } from 'nest-winston';
import { transports, format } from 'winston';
import { LogModule } from './log/LogModule';
import { LogEntity } from './log/LogEntity';
import { EncryptModule } from './encrypt/encryptModule';

@Module({
  imports: [
    WinstonModule.forRoot({
      // options
      transports: [
        new transports.File({
          filename: `logs/logs.log`,
          level: 'info',
          format: format.combine(format.timestamp(), format.json()),
        }),
      ],
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database',
      entities: [LogEntity, UserEntity],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    LogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
