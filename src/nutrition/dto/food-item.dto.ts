import { ApiProperty } from '@nestjs/swagger';
import { 
    IsString, 
    IsNotEmpty,
    IsNumber
} from 'class-validator';

export class FoodItemDto {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    @IsNumber()
    @IsNotEmpty()
    food_item_id: number;

    @ApiProperty({example: 'Бананы', description: "Название продукта питания"})
    @IsNotEmpty({message: 'Имя сущности не может быть пустым'})
    @IsString()
    food_item_name: string;

    @ApiProperty({example: 0.089, description: "Количество киллокаллорий в данном продукте"})
    @IsNumber()
    @IsNotEmpty()
    kCal_quantity: number;

    @ApiProperty({example: 0.3, description: "Количество грамм жира в продукте"})
    @IsNumber()
    @IsNotEmpty()
    fat_quantity: number;

    @ApiProperty({example: 1.1, description: "Количество грамм белка в продукте"})
    @IsNumber()
    @IsNotEmpty()
    protein_quantity: number;

    @ApiProperty({example: 23, description: "Количество грамм углеводов в продукте"})
    @IsNumber()
    @IsNotEmpty()
    carbohyd_quantity: number;
};