import { 
  Controller, 
  Post, 
  Body,  
  Param, 
  UseGuards, 
  UsePipes, 
  ValidationPipe, 
  ParseIntPipe, 
  Patch
} from '@nestjs/common';
import { OrganaizerService } from './organaizer.service';
import { UserFuelOrganaizerDto } from './dto/user-fuel-organaizer.dto';
import { Role } from 'src/user/roles.decorator';
import { 
  ApiOperation, 
  ApiResponse, 
  ApiTags 
} from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/auth/authentication.guard';
import { AuthorizationGuard } from 'src/auth/authorization.guard';
import { UserFuelOrganaizer } from './entities/user-fuel-orzanaizer.entity';
import { UserMoveOrganaizerDto } from './dto/user-move-organaizer.dto';
import { UserMoveOrganaizer } from './entities/user-move-organaizer.entity';

@ApiTags('Создание сущностей, отвечающих за учёт питания, движения и отдыха пользователя')
@Role('user')
@UseGuards(AuthenticationGuard, AuthorizationGuard)
@Controller('logs')
export class OrganaizerController {
  constructor(private readonly organaizerService: OrganaizerService) {}
  
  @ApiOperation({summary: 'Создание новой записи в журнал питания пользователя (завтрак, обед, ужин)'})
  @ApiResponse({status: 201, type: UserFuelOrganaizer})
  @Post('/creat-fuel-log/:id/:foodItemId/:date')
  @UsePipes(new ValidationPipe())
  createFuelLog(@Body() userFuelOrganaizer: UserFuelOrganaizerDto,
    @Param('id', ParseIntPipe) id: number,
    @Param('foodItemId', ParseIntPipe) foodItem: number,
    @Param('date') date: string) {

      return this.organaizerService.createFuelLog(userFuelOrganaizer, id, foodItem, date);
  };

  @ApiOperation({summary: 'Создание новой записи в журнал двигательной активности'})
  @ApiResponse({status: 201, type: UserMoveOrganaizer})
  @Post('/creat-move-log/:id/:date')
  @UsePipes(new ValidationPipe())
  createMoveLog(@Body() userMoveOrganaizer: UserMoveOrganaizerDto,
  @Param('id', ParseIntPipe) id: number,
  @Param('date') date: string) {

    return this.organaizerService.createMoveLog(userMoveOrganaizer, id, date);
  };

  @ApiOperation({summary: 'Изменение статуса (сделано/не сделано) в журнале двигательной активности'})
  @ApiResponse({status: 202, type: UserMoveOrganaizer})
  @Patch('/update-move-log-completion/:id/:moveLogId')
  patchMoveLogCompletion(@Param('id', ParseIntPipe) id: number,
  @Param('moveLogId', ParseIntPipe) moveLogId: number) {

    return this.organaizerService.patchMoveLogCompletion(id, moveLogId);
  };

  // @Get()
  // findAll() {
  //   return this.organaizerService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.organaizerService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOrganaizerDto: UpdateOrganaizerDto) {
  //   return this.organaizerService.update(+id, updateOrganaizerDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.organaizerService.remove(+id);
  // }
};
