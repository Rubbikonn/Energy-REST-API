import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt/dist';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService
    ) {}

  // async login(userDto: CreateUserDto) {
  //   const user = this.validateUser(userDto)
  //   return this.generateToken(user);
  // };

  async registration(createUserDto: CreateUserDto) {
    const existedUser = await this.userRepository.findOne({
      where: {
        login: createUserDto.login
      },
    });

    if (existedUser) {
       throw new HttpException('Данный логин уже существует', HttpStatus.BAD_REQUEST);
    };

    const hashPassword = await bcrypt.hash(createUserDto.password, 7)
    const user = await this.userRepository.save({
      ...createUserDto,
      password: hashPassword
    })
    return await this.generateToken(user);
  };

  async generateToken(user: User) {
    const payload = {
      id: user.id,
      login: user.login,
    };
    return {
      token: this.jwtService.sign(payload)
    };
  };

  // private async validateUser(createUserDto: CreateUserDto) {
  //   const user = await this.userService.getUserByLogin(createUserDto.login);
  //   const passwordEquals = await bcrypt.compare(createUserDto.password)
  // }
}