import { Controller, Post, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('/login')
  // login(@Body() createUserDto: CreateUserDto) {
  //   return this.authService.login(createUserDto)
  // }

  @Post('/registration') 
  registration(@Body() createUserDto: CreateUserDto) {
    console.log('Зашли в контроллер')
    return this.authService.registration(createUserDto)
  }
}







  //   @UsePipes(new ValidationPipe())
  //   create(@Body() createUserDto: CreateUserDto) {

  //   return this.authService.create(createUserDto);
  // }

  

  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }