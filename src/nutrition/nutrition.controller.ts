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
import { NewFoodItem } from './entities/new-food-item.entity';
import { NewFoodItemDto } from './dto/new-food-item.dto';

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
  @ApiResponse({status: 201, type: NewFoodItem})
  @Post('/create-food-item/:id/:foodCategoryId')
  @UsePipes(new ValidationPipe())
  createFoodItem(@Body() newFoodItem: NewFoodItemDto,
  @Param('id', ParseIntPipe) id: number,
  @Param('foodCategoryId', ParseIntPipe) foodCategoryId: number) {

    return this.nutritionService.createFoodItem(newFoodItem, id, foodCategoryId);
  };

  @ApiOperation({summary: 'Получение всех существующих продуктов питания с базы данных'})
  @ApiResponse({status: 200, type: [NewFoodItem]})
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
