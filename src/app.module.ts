import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { NutritionModule } from './nutrition/nutrition.module';

@Module({
  imports: [ 
    UserModule, 
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: '.env' 
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        secret: configService.get('PRIVATE_KEY'),
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.js, .ts}']
      }),
      inject: [ConfigService]
    }),
    AuthModule,
    NutritionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
