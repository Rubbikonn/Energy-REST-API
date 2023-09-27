import { 
  BadRequestException, 
  Injectable 
} from '@nestjs/common';
import { CreateFoodCategoryDto } from './dto/create-food-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFoodCategory } from './entities/create-food-category.entity';
import { Repository } from 'typeorm';
import { FoodItemDto } from './dto/food-item.dto';
import { FoodItem } from './entities/food-item.entity';

@Injectable()
export class NutritionService {
  constructor(
  @InjectRepository(CreateFoodCategory) private readonly createFoodCategoryRepository: Repository<CreateFoodCategory>,
  @InjectRepository(FoodItem) private readonly foodItemRepository: Repository<FoodItem>) {}

  async createFoodCategory(createFoodCategory: CreateFoodCategoryDto) {

    const existedCategory = await this.createFoodCategoryRepository.findOne({
      where: {
        food_category_title: createFoodCategory.food_category_title 
      }
    });

    if (existedCategory) {
      throw new BadRequestException('Данная категория уже существует')
    };

    const newCategory = {
      food_category_id: createFoodCategory.food_category_id,
      food_category_title: createFoodCategory.food_category_title
    };

    return await this.createFoodCategoryRepository.save(newCategory);
  };

  async getAllFoodCategories() {
    return await this.createFoodCategoryRepository.find();
  };

  async createFoodItem(foodItem: FoodItemDto) {

    const existedFoodItem = await this.foodItemRepository.findOne({
      where: {
        food_item_name: foodItem.food_item_name
      }
    });

    if (existedFoodItem) {
      throw new BadRequestException('Данный продукт питания уже существует в базе данных')
    };

    const newFoodItem = {
      food_item_id: foodItem.food_item_id,
      food_item_name: foodItem.food_item_name,
      kCal_quantity: foodItem.kCal_quantity,
      fat_quantity: foodItem.fat_quantity,
      protein_quantity: foodItem.protein_quantity,
      carbohyd_quantity: foodItem.carbohyd_quantity
    };

    return await this.foodItemRepository.save(newFoodItem);
  };

  async getAllFoodItem() {
    return await this.foodItemRepository.find();
  };
};








  // findAll() {
  //   return `This action returns all nutrition`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} nutrition`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} nutrition`;
  // }
