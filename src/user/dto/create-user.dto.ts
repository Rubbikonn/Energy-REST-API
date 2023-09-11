import { 
    IsString, 
    IsNotEmpty, 
    MinLength, 
    MaxLength 
} from 'class-validator'

export class CreateUserDto {
    id: number;

    @MinLength(4, { message: 'Логин должен быть минимум 4 символа'})
    @MaxLength(16, { message: 'Логин должен быть максимум 16 символов' })
    @IsString()
    @IsNotEmpty()
    login: string;

    @MinLength(4, { message: 'Пароль должен быть минимум 4 символа'})
    @MaxLength(16, { message: 'Пароль должен быть максимум 16 символов'})
    @IsString()
    @IsNotEmpty()
    password: string;
}