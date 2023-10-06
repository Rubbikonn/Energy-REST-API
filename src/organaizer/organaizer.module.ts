import { Module } from '@nestjs/common';
import { OrganaizerService } from './organaizer.service';
import { OrganaizerController } from './organaizer.controller';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFuelOrganaizer } from './entities/user-fuel-orzanaizer.entity';
import { NewFoodItem } from 'src/nutrition/entities/new-food-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    UserFuelOrganaizer,
    NewFoodItem
  ]),
    UserModule
  ],
  controllers: [OrganaizerController],
  providers: [OrganaizerService],
})
export class OrganaizerModule {}
