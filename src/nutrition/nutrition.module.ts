import { Module } from '@nestjs/common';
import { NutritionService } from './nutrition.service';
import { NutritionController } from './nutrition.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateFoodCategory } from './entities/create-food-category.entity';
import { FoodItem } from './entities/food-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    CreateFoodCategory,
    FoodItem
  ])],
  controllers: [NutritionController],
  providers: [NutritionService],
})
export class NutritionModule {}
