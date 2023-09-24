import { 
    IsNotEmpty, 
    IsString 
} from "class-validator";

export class UserHealthVisionDto {
    vision_id: number;

    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения' })
    @IsString()
    vision_title: string;

    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения'})
    vision_value: string;
};