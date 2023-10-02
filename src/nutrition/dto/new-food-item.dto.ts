import { ApiProperty } from '@nestjs/swagger';
import { 
    IsString, 
    IsNotEmpty,
    IsNumber
} from 'class-validator';

export class NewFoodItemDto {
    @ApiProperty({example: 1, description: "Уникальный идентификатор продукта"})
    @IsNumber()
    @IsNotEmpty()
    foodItemId: number;

    @ApiProperty({example: 'Бананы', description: "Название продукта питания"})
    @IsNotEmpty({message: 'Имя сущности не может быть пустым'})
    @IsString()
    foodItemName: string;

    @ApiProperty({example: 0.089, description: "Количество киллокаллорий в данном продукте"})
    @IsNumber()
    @IsNotEmpty()
    kCalQuantity: number;

    @ApiProperty({example: 0.3, description: "Количество грамм жира в продукте"})
    @IsNumber()
    @IsNotEmpty()
    fatQuantity: number;

    @ApiProperty({example: 1.1, description: "Количество грамм белка в продукте"})
    @IsNumber()
    @IsNotEmpty()
    proteinQuantity: number;

    @ApiProperty({example: 23, description: "Количество грамм углеводов в продукте"})
    @IsNumber()
    @IsNotEmpty()
    carbohydQuantity: number;

    @ApiProperty({example: 2, description: "Количество порций"})
    @IsNumber()
    @IsNotEmpty()
    unit: number;

    @ApiProperty({example: 100, description: "Вес порции в граммах"})
    @IsNumber()
    @IsNotEmpty()
    portionSize: number;

    @ApiProperty({example: "ООО 'Весёлый молочник'", description: "Производитель продукта"})
    @IsNotEmpty({message: 'Название производителя продукта не может быть пустым'})
    @IsString()
    manufacturer: string;
};