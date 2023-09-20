import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEvaluativePoints } from './entities/user-evaluative-points.entity';
import { UserEvaluativePointsDto } from './dto/user-evaluative-points.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEvaluativePoints) private readonly userEvaluativeRepository: Repository<UserEvaluativePoints>
    ) {}

  async createNewEvaluativePoint(userEvaluativePointsDto: UserEvaluativePointsDto, 
    id: number) {

    const existedPoint = await this.userEvaluativeRepository.findOneBy({
      user_id: { id },
      point_title: userEvaluativePointsDto.point_title
    });

    if (existedPoint) {
      throw new BadRequestException('Этот показатель у данного пользователя уже был введён ранее')
    }

      const newPoint = {
        point_id: userEvaluativePointsDto.point_id,
        user_id: {
          id
        },
        point_title: userEvaluativePointsDto.point_title,
        point_value: userEvaluativePointsDto.point_value
      }

      return await this.userEvaluativeRepository.save(newPoint);
    // const findCreatedPoint = await this.userEvaluativeRepository.findBy({
    //   user: { id },
    //   title: userEvaluativePointsDto.title
    // });

    // if (findCreatedPoint)
  }

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
}
