import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './UserService';
import { UserEntity } from 'src/user/UserEntity';
import { UsersController } from './UserController';
import { LogModule } from 'src/log/LogModule';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), LogModule],
  providers: [UserService],
  controllers: [UsersController],
  exports: [UserService],
})
export class UserModule {}
