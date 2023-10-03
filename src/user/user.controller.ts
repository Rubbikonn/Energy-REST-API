import { 
  Controller, 
  Get, 
  Post, 
  Body,
  Param, 
  UsePipes, 
  ValidationPipe,
  ParseIntPipe,
  UseGuards
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEvaluativePointsDto } from './dto/user-evaluative-points.dto';
import { UserPersonalStrengthDto } from './dto/user-personal-strength.dto';
import { UserHealthVisionDto } from './dto/user-health-vision.dto';
import { 
  ApiOperation, 
  ApiResponse, 
  ApiTags 
} from '@nestjs/swagger';
import { UserEvaluativePoints } from './entities/user-evaluative-points.entity';
import { UserHealthVision } from './entities/user-health-vision.entity';
import { UserPersonalStrength } from './entities/user-personal-strength.entity';
import { AuthenticationGuard } from 'src/auth/authentication.guard';
import { Role } from './roles.decorator';
import { AuthorizationGuard } from 'src/auth/authorization.guard';

@ApiTags('Создание и получение персональных данных пользователя')
@Role('user')
@UseGuards(AuthenticationGuard, AuthorizationGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({summary: 'Создание оценочного показателя здоровья'})
  @ApiResponse({status: 201, type: UserEvaluativePoints})
  @Post('/create-new-evaluative-point/:id')
  @UsePipes(new ValidationPipe())
  createEvaluativePoint(@Body() userEvaluativePoints: UserEvaluativePointsDto, 
  @Param('id', ParseIntPipe) id: number) {

    return this.userService.createNewEvaluativePoint(userEvaluativePoints, id)
  };

  @ApiOperation({summary: 'Получение оценочных показателей здоровья конкретного пользователя'})
  @ApiResponse({status: 200, type: UserEvaluativePoints})
  @Get('/get-all-existed-evaluative-points/:id')
  getAllEvaluativePoints(@Param('id', ParseIntPipe) id: number) {

    return this.userService.getAllEvaluativePoints(id);
  };

  @ApiOperation({summary: 'Создание сущности, в которой пользователь описывает свои сильные стороны'})
  @ApiResponse({status: 201, type: UserPersonalStrength})
  @Post('/create-new-personal-strength/:id')
   createPersonalStrength(@Body() userPersonalStrength: UserPersonalStrengthDto,
    @Param('id', ParseIntPipe) id: number) {
      
    return this.userService.createNewPersonalStrength(userPersonalStrength, id)
  };

  @ApiOperation({summary: 'Получение сущностей, в которых пользователь описывает свои сильные стороны'})
  @ApiResponse({status: 200, type: UserPersonalStrength})
  @Get('/get-all-personal-strength/:id')
  getAllPersonalStrength(@Param('id', ParseIntPipe) id: number) {

    return this.userService.getAllPersonalStrength(id);
  };

  @ApiOperation({summary: 'Создание личной цели пользователя и его видение результата'})
  @ApiResponse({status: 201, type: UserHealthVision})
  @Post('/create-new-health-vision/:id')
    createHealthVision(@Body() userHealthVision: UserHealthVisionDto,
    @Param('id', ParseIntPipe) id: number) {
      
    return this.userService.createHealthVision(userHealthVision, id)
  };

  @ApiOperation({summary: 'Получение личных целей пользователя по идентификатору'})
  @ApiResponse({status: 200, type: UserHealthVision})
  @Get('/get-all-health-vision/:id')
  getAllHealthVision(@Param('id', ParseIntPipe) id: number) {

    return this.userService.getAllHealthVision(id);
  };
};