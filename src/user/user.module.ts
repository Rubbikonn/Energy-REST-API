import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEvaluativePoints } from './entities/user-evaluative-points.entity';
import { UserPersonalStrength } from './entities/user-personal-strength.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEvaluativePoints, UserPersonalStrength])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
