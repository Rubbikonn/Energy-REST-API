import { 
  Injectable, 
  BadRequestException, 
  HttpException, 
  HttpStatus
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEvaluativePoints } from './entities/user-evaluative-points.entity';
import { UserEvaluativePointsDto } from './dto/user-evaluative-points.dto';
import { Repository } from 'typeorm';
import { UserPersonalStrengthDto } from './dto/user-personal-strength.dto';
import { UserPersonalStrength } from './entities/user-personal-strength.entity';
import { User } from './entities/user.entity';
import { UserHealthVisionDto } from './dto/user-health-vision.dto';
import { UserHealthVision } from './entities/user-health-vision.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEvaluativePoints) private readonly userEvaluativeRepository: Repository<UserEvaluativePoints>,
    @InjectRepository(UserPersonalStrength) private readonly userPersonalStrengthRepository: Repository<UserPersonalStrength>,
    @InjectRepository(UserHealthVision) private readonly userHealthVisionRepository: Repository<UserHealthVision>,
    @InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async createNewEvaluativePoint(userEvaluativePoints: UserEvaluativePointsDto, 
  id: number) {

    await this.checkExistedUser(id);

    const existedPoint = await this.userEvaluativeRepository.findOneBy({
      userId: { id },
      pointTitle: userEvaluativePoints.pointTitle
    });

    if (existedPoint) {
      throw new BadRequestException('Этот показатель у данного пользователя уже был введён ранее')
    };

      const newPoint = {
        pointId: userEvaluativePoints.pointId,
        userId: {
          id
        },
        pointTitle: userEvaluativePoints.pointTitle,
        pointValue: userEvaluativePoints.pointValue
      }

      return await this.userEvaluativeRepository.save(newPoint);
    }

  async createNewPersonalStrength(userPersonalStrength: UserPersonalStrengthDto, id: number) {

    await this.checkExistedUser(id);
    
    const existedStrength = await this.userPersonalStrengthRepository.findOneBy({
      userId: { id },
      strengthTitle: userPersonalStrength.strengthTitle
    })

    if (existedStrength) {
      throw new BadRequestException('Этот показатель у данного пользователя уже был введён ранее')
    };

    const newStrength = {
      strengthId: userPersonalStrength.strengthId,
      userId: {
        id
      },
      strengthTitle: userPersonalStrength.strengthTitle,
      strengthValue: userPersonalStrength.strengthValue
    };

    return await this.userPersonalStrengthRepository.save(newStrength);
  };

  async createHealthVision(userHealthVision: UserHealthVisionDto, id: number) {

    await this.checkExistedUser(id);
    
    const existedVision = await this.userHealthVisionRepository.findOneBy({
      userId: { id },
      visionTitle: userHealthVision.visionTitle
    })

    if (existedVision) {
      throw new BadRequestException('Этот показатель у данного пользователя уже был введён ранее')
    };

    const newVision = {
      visionId: userHealthVision.visionId,
      userId: {
        id
      },
      visionTitle: userHealthVision.visionTitle,
      visionValue: userHealthVision.visionValue
    };

    return await this.userHealthVisionRepository.save(newVision);
};

  async getAllEvaluativePoints (id: number) {

    await this.checkExistedUser(id);

    return await this.userEvaluativeRepository.find({
      where: {
        userId: { id }
      }
    });
  };

  async getAllPersonalStrength (id: number) {

    await this.checkExistedUser(id);

    return await this.userPersonalStrengthRepository.find({
      where: {
        userId: { id }
      }
    });
  };

  async getAllHealthVision (id: number) {

    await this.checkExistedUser(id);

    return await this.userHealthVisionRepository.find({
      where: {
        userId: { id }
      }
    });
  };
  
  async checkExistedUser( userId: number ) {
    const existedUser = await this.userRepository.findOne({
      where: {
        id: userId
      }
    }); 

    if (!existedUser) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Пользователь с данным идентификатором не зарегистрирован',
      }, HttpStatus.BAD_REQUEST);
    };
    
   return existedUser;
  };
};
