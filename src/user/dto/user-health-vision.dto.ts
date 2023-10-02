import { ApiProperty } from "@nestjs/swagger";
import { 
    IsNotEmpty, 
    IsString 
} from "class-validator";

export class UserHealthVisionDto {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    visionId: number;

    @ApiProperty({example: 'What do I want?', description: "Описание личного видения пользователем его целей и желаемого результата"})
    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения' })
    @IsString()
    visionTitle: string;

    @ApiProperty({example: 'I want to be healthy', description: "Значение личного видения пользователя его целей и желаемого результата"})
    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения'})
    visionValue: string;
};