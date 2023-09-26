import { 
  Controller, 
  Post, 
  Body, 
  UsePipes, 
  ValidationPipe 
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { 
  ApiOperation, 
  ApiResponse, 
  ApiTags 
} from '@nestjs/swagger';

@ApiTags('Регистрация и авторизация')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({summary: 'Регистрация нового пользователя'})
  @ApiResponse({status: 201, type: Object})
  @Post('/registration')
  @UsePipes(new ValidationPipe())
  async registration(@Body() createUserDto: CreateUserDto) {
    return await this.authService.registration(createUserDto)
  };

  @ApiOperation({summary: 'Авторизация пользователя в системе'})
  @ApiResponse({status: 200, type: Object})
  @Post('/login')
  @UsePipes(new ValidationPipe())
  login(@Body() createUserDto: CreateUserDto) {
    return this.authService.login(createUserDto);
  };
};