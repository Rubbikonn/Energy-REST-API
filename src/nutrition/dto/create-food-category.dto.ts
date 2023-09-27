import { ApiProperty } from '@nestjs/swagger';
import { 
    IsString, 
    IsNotEmpty,
    IsNumber
} from 'class-validator';

export class CreateFoodCategoryDto {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    @IsNumber()
    @IsNotEmpty()
    food_category_id: number;

    @ApiProperty({example: 'Feel best', description: "Название категории для продукта питания отнесенное к конкретному пользователю"})
    @IsNotEmpty({message: 'Название категории не может быть пустым'})
    @IsString()
    food_category_title: string; 
};