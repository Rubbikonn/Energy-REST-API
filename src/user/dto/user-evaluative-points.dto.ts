import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UserEvaluativePointsDto {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    point_id: number;

    @ApiProperty({example: 'Systolic blood pressure', description: "Название оценочного показателя"})
    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения' })
    @IsString()
    point_title: string;

    @ApiProperty({example: 120, description: "Значение оценочного показателя"})
    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения' })
    @IsNumber()
    point_value: number;
};