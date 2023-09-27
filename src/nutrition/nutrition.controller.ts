import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  UsePipes, 
  ValidationPipe, 
  ParseIntPipe
} from '@nestjs/common';
import { NutritionService } from './nutrition.service';
import { CreateFoodCategory } from './entities/create-food-category.entity';
import { CreateFoodCategoryDto } from './dto/create-food-category.dto';
import { 
  ApiOperation, 
  ApiResponse, 
  ApiTags 
} from '@nestjs/swagger';
import { FoodItem } from './entities/food-item.entity';
import { FoodItemDto } from './dto/food-item.dto';

@ApiTags('Создание и получение сущностей, относящихся к питанию пользователей приложения')
@Controller('nutrition')
export class NutritionController {
  constructor(private readonly nutritionService: NutritionService) {}
  
  @ApiOperation({summary: 'Создание категории для продуктов питания'})
  @ApiResponse({status: 201, type: CreateFoodCategory})
  @Post('/create-food-category')
  @UsePipes(new ValidationPipe())
  createFoodCategory(@Body() createFoodCategory: CreateFoodCategoryDto) {

    return this.nutritionService.createFoodCategory(createFoodCategory);
  };

  @ApiOperation({summary: 'Получение всех созданных категорий продуктов питания'})
  @ApiResponse({status: 200, type: [CreateFoodCategory]})
  @Get('/get-all-existed-food-categories') 
  getAllFoodCategories () {

    return this.nutritionService.getAllFoodCategories();
  };

  @ApiOperation({summary: 'Создание нового продукта питания'})
  @ApiResponse({status: 201, type: FoodItem})
  @Post('/create-food-item')
  @UsePipes(new ValidationPipe())
  createFoodItem(@Body() foodItem: FoodItemDto) {

    return this.nutritionService.createFoodItem(foodItem);
  };

  @ApiOperation({summary: 'Получение всех существующих продуктов питания с базы данных'})
  @ApiResponse({status: 200, type: [FoodItem]})
  @Get('/get-all-existed-food-item') 
  getAllFoodItem () {

    return this.nutritionService.getAllFoodItem();
  };
};

  // @Get()
  // findAll() {
  //   return this.nutritionService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.nutritionService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNutritionDto: UpdateNutritionDto) {
  //   return this.nutritionService.update(+id, updateNutritionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.nutritionService.remove(+id);
  // }
