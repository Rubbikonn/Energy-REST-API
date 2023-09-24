import { Injectable, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
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

  async createNewEvaluativePoint(userEvaluativePointsDto: UserEvaluativePointsDto, 
  id: number) {

    await this.checkExistedUser(id);

    const existedPoint = await this.userEvaluativeRepository.findOneBy({
      user_id: { id },
      point_title: userEvaluativePointsDto.point_title
    });

    if (existedPoint) {
      throw new BadRequestException('Этот показатель у данного пользователя уже был введён ранее')
    };

      const newPoint = {
        point_id: userEvaluativePointsDto.point_id,
        user_id: {
          id
        },
        point_title: userEvaluativePointsDto.point_title,
        point_value: userEvaluativePointsDto.point_value
      }

      return await this.userEvaluativeRepository.save(newPoint);
    }

  async createNewPersonalStrength(userPersonalStrength: UserPersonalStrengthDto, id: number) {

    await this.checkExistedUser(id);
    
    const existedStrength = await this.userPersonalStrengthRepository.findOneBy({
      user_id: { id },
      strength_title: userPersonalStrength.strength_title
    })

    if (existedStrength) {
      throw new BadRequestException('Этот показатель у данного пользователя уже был введён ранее')
    };

    const newStrength = {
      strength_id: userPersonalStrength.strength_id,
      user_id: {
        id
      },
      strength_title: userPersonalStrength.strength_title,
      strength_value: userPersonalStrength.strength_value
    };

    return await this.userPersonalStrengthRepository.save(newStrength);
  };

  async createHealthVision(userHealthVision: UserHealthVisionDto, id: number) {

    await this.checkExistedUser(id);
    
    const existedVision = await this.userHealthVisionRepository.findOneBy({
      user_id: { id },
      vision_title: userHealthVision.vision_title
    })

    if (existedVision) {
      throw new BadRequestException('Этот показатель у данного пользователя уже был введён ранее')
    };

    const newVision = {
      vision_id: userHealthVision.vision_id,
      user_id: {
        id
      },
      vision_title: userHealthVision.vision_title,
      vision_value: userHealthVision.vision_value
    };

    return await this.userHealthVisionRepository.save(newVision);
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
      
    // const findCreatedPoint = await this.userEvaluativeRepository.findBy({
    //   user: { id },
    //   title: userEvaluativePointsDto.title
    // });

    // if (findCreatedPoint)

  // findAll() {
  //   return `This action returns all user`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
