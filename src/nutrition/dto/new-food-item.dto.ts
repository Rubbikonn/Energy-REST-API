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

    @ApiProperty({example: 2, description: "Количество порций"})
    @IsNumber()
    @IsNotEmpty()
    unit: number;

    @ApiProperty({example: 100, description: "Вес порции в граммах"})
    @IsNumber()
    @IsNotEmpty()
    portion_size: number;

    @ApiProperty({example: "ООО 'Весёлый молочник'", description: "Производитель продукта"})
    @IsNotEmpty({message: 'Название производителя продукта не может быть пустым'})
    @IsString()
    manufacturer: string;
};