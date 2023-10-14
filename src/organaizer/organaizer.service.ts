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
import { existentFoodItem } from './interfaces/existend-food-item.interface';
import { UserMoveOrganaizerDto } from './dto/user-move-organaizer.dto';
import { UserMoveOrganaizer } from './entities/user-move-organaizer.entity';

@Injectable()
export class OrganaizerService {
  constructor(
  @InjectRepository(UserFuelOrganaizer) private readonly userFuelOrganizerRepository: Repository<UserFuelOrganaizer>,
  @InjectRepository(NewFoodItem) private readonly foodItemRepository: Repository<NewFoodItem>,
  @InjectRepository(UserMoveOrganaizer) private readonly moveItemRepository: Repository<UserMoveOrganaizer>,
  private userService: UserService) {}

  async createFuelLog(userFuelOrganaizer: UserFuelOrganaizerDto, id: number, foodItemId: number,
    date: string) {

    await this.userService.checkExistedUser(id);

    const existentFoodItem : existentFoodItem = await this.foodItemRepository.findOne({
      relations: ['foodCategoryId', 'userId'],
      loadRelationIds: true,
      where: {
        foodItemId: foodItemId
      }
    });

    if (!existentFoodItem) {
      throw new BadRequestException('Данного идентификатора продукта питания не существует');
    };


    if (!(date.match(new RegExp('(\\d{2}).(\\d{2}).(\\d{4})')))) {
      throw new BadRequestException('Дата, переданная в запросе, не соответствует нужному формату');
    }; 
    
    const correctDate = new Date(Date.parse(date)).toISOString().split('T')[0];
    
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
      date: correctDate,
      serving: userFuelOrganaizer.serving,
      foodCategoryId: existentFoodItem.foodCategoryId
    };

    return await this.userFuelOrganizerRepository.save(newFuelLog);
  };

  async createMoveLog(userMoveOrganaizer: UserMoveOrganaizerDto, id: number, date: string) {

    await this.userService.checkExistedUser(id);

    const existentMoveItem = await this.moveItemRepository.findOne({
      relations: ['userId'],
      loadRelationIds: true,
      where: {
        moveLogId: userMoveOrganaizer.moveLogId,
        movementDescription: userMoveOrganaizer.movementDescription,
        date: date
      }
    });

    if (existentMoveItem) {
      throw new BadRequestException('Данная запись в журнале активности с указанной датой уже существует');
    };

    if (!(date.match(new RegExp('(\\d{2}).(\\d{2}).(\\d{4})')))) {
      throw new BadRequestException('Дата, переданная в запросе, не соответствует нужному формату');
    }; 
    
    const correctDate = new Date(Date.parse(date)).toISOString().split('T')[0];

    const newMoveLog = {
      moveLogId: userMoveOrganaizer.moveLogId,
      userId: {
        id
      },
      movementDescription: userMoveOrganaizer.movementDescription,
      completionStatus: userMoveOrganaizer.completionStatus,
      date: correctDate
    };

    return await this.moveItemRepository.save(newMoveLog);
  };

  async patchMoveLogCompletion(id: number, moveLogId: number) {

    await this.userService.checkExistedUser(id);

    const existentMoveLog = await this.moveItemRepository.findOne({
      relations: ['userId'],
      loadRelationIds: true,
      where: {
        moveLogId: moveLogId,
        userId: {
          id
        }
      }
    });

    if (!existentMoveLog) {
      throw new BadRequestException('Данной записи в журнале двигательной активности с таким идентификатором не существует')
    };

    let status = existentMoveLog.completionStatus;

    let changedStatus = !status;

    const moveLog = {
      ...existentMoveLog,
      completionStatus: changedStatus 
    };

    return await this.moveItemRepository.update(id, moveLog);
  };
};
