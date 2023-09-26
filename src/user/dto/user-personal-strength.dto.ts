import { ApiProperty } from "@nestjs/swagger";
import { 
    IsNotEmpty, 
    IsString 
} from "class-validator";

export class UserPersonalStrengthDto {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    strength_id: number;

    @ApiProperty({example: 'Courage', description: "Название показателя, обозначающего личную сильную сторону пользователя"})
    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения'})
    @IsString()
    strength_title: string;

    @ApiProperty({example: '4', description: "Значение показателя, обозначающего личную сильную сторону пользователя"})
    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения'})
    strength_value: string;
};