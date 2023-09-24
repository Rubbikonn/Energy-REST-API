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
import { UserEvaluativePointsDto } from './dto/user-evaluative-points.dto';
import { UserPersonalStrengthDto } from './dto/user-personal-strength.dto';
import { UserHealthVisionDto } from './dto/user-health-vision.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create-new-evaluative-point/:id')
  @UsePipes(new ValidationPipe())
    createEvaluativePoint(@Body() userEvaluativePointsDto: UserEvaluativePointsDto, 
    @Param('id', ParseIntPipe) id: number) {

    return this.userService.createNewEvaluativePoint(userEvaluativePointsDto, id)
  };

  @Post('/create-new-personal-strength/:id')
   createPersonalStrength(@Body() userPersonalStrength: UserPersonalStrengthDto,
    @Param('id', ParseIntPipe) id: number) {
      
    return this.userService.createNewPersonalStrength(userPersonalStrength, id)
  };

  @Post('/create-new-health-vision/:id')
    createHealthVision(@Body() userHealthVision: UserHealthVisionDto,
    @Param('id', ParseIntPipe) id: number) {
      
    return this.userService.createHealthVision(userHealthVision, id)
  };


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