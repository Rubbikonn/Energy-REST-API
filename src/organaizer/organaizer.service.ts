import {
  BadRequestException, 
  Injectable 
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserFuelOrganaizer } from './entities/user-fuel-orzanaizer.entity';
import { UserFuelOrganaizerDto } from './dto/user-fuel-organaizer.dto';
import { NewFoodItem } from 'src/nutrition/entities/new-food-item.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class OrganaizerService {
  constructor(
  @InjectRepository(UserFuelOrganaizer) private readonly userFuelOrganizerRepository: Repository<UserFuelOrganaizer>,
  @InjectRepository(NewFoodItem) private readonly foodItemRepository: Repository<NewFoodItem>,
  private userService: UserService) {}

  async createFuelLog(userFuelOrganaizer: UserFuelOrganaizerDto, id: number, foodItemId: number,
    date: string) {

    await this.userService.checkExistedUser(id);

    const existentFoodItem = this.foodItemRepository.findOne({
      where: {
        foodItemId: foodItemId
      }
    });

    if (!existentFoodItem) {
      throw new BadRequestException('Данного идентификатора продукта питания не существует');
    };

    const correctDate = new Date(Date.parse(date));

    const newFuelLog = {
      fuelLogId: userFuelOrganaizer.fuelLogId,
      userId: {
        id
      },
      mealTime: userFuelOrganaizer.mealTime,
      foodItemId: {
        foodItemId
      },
      eatenStatus: userFuelOrganaizer.eatenStatus,
      date: correctDate.toISOString(),
      serving: userFuelOrganaizer.serving
    };

    return await this.userFuelOrganizerRepository.save(newFuelLog);
  };
};
