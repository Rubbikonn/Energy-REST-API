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

@Injectable()
export class NutritionService {
  constructor(
  @InjectRepository(CreateFoodCategory) private readonly createFoodCategoryRepository: Repository<CreateFoodCategory>,
  @InjectRepository(NewFoodItem) private readonly foodItemRepository: Repository<NewFoodItem>) {}

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

  async createFoodItem(newFoodItem: NewFoodItemDto, id: number, food_category_id: number) {

    const existedFoodItem = await this.foodItemRepository.findOne({
      where: {
        food_item_name: newFoodItem.food_item_name
      }
    });

    if (existedFoodItem) {
      throw new BadRequestException('Данный продукт питания уже существует в базе данных')
    };

    const newItem = {
      food_item_id: newFoodItem.food_item_id,
      user_id: {
        id
      },
      food_category_id: {
        food_category_id
      },
      food_item_name: newFoodItem.food_item_name,
      kCal_quantity: newFoodItem.kCal_quantity,
      fat_quantity: newFoodItem.fat_quantity,
      protein_quantity: newFoodItem.protein_quantity,
      carbohyd_quantity: newFoodItem.carbohyd_quantity,
      unit: newFoodItem.unit,
      portion_size: newFoodItem.portion_size,
      manufacturer: newFoodItem.manufacturer
    };

    return await this.foodItemRepository.save(newItem);
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
