import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEvaluativePoints } from './entities/user-evaluative-points.entity';
import { UserPersonalStrength } from './entities/user-personal-strength.entity';
import { User } from './entities/user.entity';
import { UserHealthVision } from './entities/user-health-vision.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    User, 
    UserEvaluativePoints, 
    UserPersonalStrength, 
    UserHealthVision])
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
