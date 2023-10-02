import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UserEvaluativePointsDto {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    pointId: number;

    @ApiProperty({example: 'Systolic blood pressure', description: "Название оценочного показателя"})
    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения' })
    @IsString()
    pointTitle: string;

    @ApiProperty({example: 120, description: "Значение оценочного показателя"})
    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения' })
    @IsNumber()
    pointValue: number;
};