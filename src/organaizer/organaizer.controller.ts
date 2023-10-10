import { 
  Controller, 
  Post, 
  Body,  
  Param, 
  UseGuards, 
  UsePipes, 
  ValidationPipe, 
  ParseIntPipe 
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
}
