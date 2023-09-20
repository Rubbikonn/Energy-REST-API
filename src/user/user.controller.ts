import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  UsePipes, 
  ValidationPipe,
  ParseIntPipe
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEvaluativePoints } from './entities/user-evaluative-points.entity';
import { UserEvaluativePointsDto } from './dto/user-evaluative-points.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create-new-evaluative-point/:id')
  @UsePipes(new ValidationPipe())
  createEvaluativePoint(@Body() userEvaluativePointsDto: UserEvaluativePointsDto, 
  @Param('id',  new ParseIntPipe()) id: number) {
    return this.userService.createNewEvaluativePoint(userEvaluativePointsDto, id)
  }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }

}