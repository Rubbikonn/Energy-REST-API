import { 
  BadRequestException, 
  Injectable 
} from '@nestjs/common';
import { CreateFoodCategoryDto } from './dto/create-food-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFoodCategory } from './entities/create-food-category.entity';
import { Repository } from 'typeorm';
import { NewFoodItemDto } from './dto/new-food-item.dto';
import { NewFoodItem } from './entities/new-food-item.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class NutritionService {
  constructor(
  @InjectRepository(CreateFoodCategory) private readonly createFoodCategoryRepository: Repository<CreateFoodCategory>,
  @InjectRepository(NewFoodItem) private readonly foodItemRepository: Repository<NewFoodItem>,
  private userService: UserService) {}

  async createFoodCategory(createFoodCategory: CreateFoodCategoryDto) {

    const existedCategory = await this.createFoodCategoryRepository.findOne({
      where: {
        foodCategoryTitle: createFoodCategory.foodCategoryTitle 
      }
    });

    if (existedCategory) {
      throw new BadRequestException('Данная категория уже существует')
    };

    const newCategory = {
      foodCategoryId: createFoodCategory.foodCategoryId,
      foodCategoryTitle: createFoodCategory.foodCategoryTitle
    };

    return await this.createFoodCategoryRepository.save(newCategory);
  };

  async getAllFoodCategories() {
    return await this.createFoodCategoryRepository.find();
  };

  async createFoodItem(newFoodItem: NewFoodItemDto, id: number, foodCategoryId: number) {

    await this.userService.checkExistedUser(id)

    const existedFoodItem = await this.foodItemRepository.findOne({
      where: {
        foodItemName: newFoodItem.foodItemName
      }
    });

    if (existedFoodItem) {
      throw new BadRequestException('Данный продукт питания уже существует в базе данных')
    };

    const newItem = {
      foodItemId: newFoodItem.foodItemId,
      userId: {
        id
      },
      foodCategoryId: {
        foodCategoryId
      },
      foodItemName: newFoodItem.foodItemName,
      kCalQuantity: newFoodItem.kCalQuantity,
      fatQuantity: newFoodItem.fatQuantity,
      proteinQuantity: newFoodItem.proteinQuantity,
      carbohydQuantity: newFoodItem.carbohydQuantity,
      unit: newFoodItem.unit,
      portionSize: newFoodItem.portionSize,
      manufacturer: newFoodItem.manufacturer
    };

    return await this.foodItemRepository.save(newItem);
  };

  async getAllFoodItem() {
    return await this.foodItemRepository.find();
  };
};