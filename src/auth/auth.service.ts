import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {}

  async create(createUserDto: CreateUserDto) {
    const existedUser = await this.userRepository.findOne({
      where: {
        login: createUserDto.login
      }
    })

    if (existedUser) throw new BadRequestException('Данный логин уже существует');

    const user = await this.userRepository.save({
      login: createUserDto.login,
      password: createUserDto.password
    })
    return 'This action adds a new user';
  }}