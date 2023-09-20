import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { User } from '../entities/user.entity';
// import { User } from './create-user.dto'

export class UserEvaluativePointsDto {
    point_id: number;

    // user_id: User;

    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения' })
    @IsString()
    point_title: string;

    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения' })
    @IsNumber()
    point_value: number;
}