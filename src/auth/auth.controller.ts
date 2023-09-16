import { 
  Controller, 
  Post, 
  Body, 
  UsePipes, 
  ValidationPipe 
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/registration')
  @UsePipes(new ValidationPipe())
  async registration(@Body() createUserDto: CreateUserDto) {
    return await this.authService.registration(createUserDto)
  };

  @Post('/login')
  @UsePipes(new ValidationPipe())
  login(@Body() createUserDto: CreateUserDto) {
    return this.authService.login(createUserDto);
  };
};