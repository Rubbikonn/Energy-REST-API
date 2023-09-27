import { ApiProperty } from '@nestjs/swagger';
import { 
    IsString, 
    IsNotEmpty,
    IsNumber
} from 'class-validator';

export class UserPersonalFoodPreferencesDto {
    @ApiProperty({example: 1, description: "Уникальный идентификатор сущности"})
    @IsNumber()
    @IsNotEmpty({message: 'Уникальный идентификатор сущности не может быть пустым'})
    food_preference_id: number;

    @ApiProperty({example: '1', description: "Уникальый идентификатор пользователя"})
    @IsNotEmpty({message: 'Уникальный идентификатор пользователя не может быть пустым'})
    @IsNumber()
    user_id: number; 

    @ApiProperty({example: '1', description: "Уникальый идентификатор продукта питания"})
    @IsNotEmpty({message: 'Уникальный идентификатор продукта не может быть пустым'})
    @IsNumber()
    food_item_id: number;

    @ApiProperty({example: '1', description: "Уникальый идентификатор категории продуктов питания для пользователя"})
    @IsNotEmpty({message: 'Уникальный идентификатор категории продуктов питания не может быть пустым'})
    @IsNumber()
    food_category_id: number;
};