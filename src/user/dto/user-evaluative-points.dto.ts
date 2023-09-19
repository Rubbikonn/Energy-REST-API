import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { User } from '../entities/user.entity'

export class UserEvaluativePointsDto {
    id: number;

    @IsOptional()
    user?: User;

    @IsNotEmpty({ message:'Данное поле является обязательным для заполненгия' })
    @IsString()
    title: string;

    @IsNotEmpty({ message:'Данное поле является обязательным для заполненгия' })
    @IsNumber()
    value: number;
}