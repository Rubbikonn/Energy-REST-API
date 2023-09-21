import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UserEvaluativePointsDto {
    point_id: number;

    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения' })
    @IsString()
    point_title: string;

    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения' })
    @IsNumber()
    point_value: number;
}