import { IsNotEmpty, IsString } from "class-validator";

export class UserPersonalStrengthDto {
    strength_id: number;

    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения'})
    @IsString()
    strength_title: string;

    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения'})
    strength_value: string | number;
}