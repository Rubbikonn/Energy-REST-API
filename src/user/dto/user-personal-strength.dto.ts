import { ApiProperty } from "@nestjs/swagger";
import { 
    IsNotEmpty, 
    IsString 
} from "class-validator";

export class UserPersonalStrengthDto {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    strengthId: number;

    @ApiProperty({example: 'Courage', description: "Название показателя, обозначающего личную сильную сторону пользователя"})
    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения'})
    @IsString()
    strengthTitle: string;

    @ApiProperty({example: '4', description: "Значение показателя, обозначающего личную сильную сторону пользователя"})
    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения'})
    strengthValue: number;
};