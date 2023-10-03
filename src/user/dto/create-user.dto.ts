import { ApiProperty } from '@nestjs/swagger';
import { 
    IsString, 
    IsNotEmpty, 
    MinLength, 
    MaxLength,
} from 'class-validator';

export class CreateUserDto {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    id: number;

    @ApiProperty({example: 'userLogin', description: "Логин пользователя"})
    @MinLength(4, { message: 'Логин должен быть минимум 4 символа'})
    @MaxLength(16, { message: 'Логин должен быть максимум 16 символов' })
    @IsString()
    @IsNotEmpty()
    login: string;

    @ApiProperty({example: 'User', description: "Роль пользователя"})
    @IsString()
    @IsNotEmpty({message: 'Ввведите роль, которая полагается данному пользователю'})
    role: string;

    @ApiProperty({example: 'password', description: "Пароль пользователя"})
    @IsNotEmpty()
    @IsString()
    @MinLength(4, { message: 'Пароль должен быть минимум 4 символа и содержать хоть одну букву'})
    @MaxLength(16, { message: 'Пароль должен быть максимум 16 и содержать хоть одну букву'})
    password: string;
};