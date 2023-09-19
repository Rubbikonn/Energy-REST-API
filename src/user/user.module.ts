import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEvaluativePoints } from './entities/user-evaluative-points.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEvaluativePoints])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
