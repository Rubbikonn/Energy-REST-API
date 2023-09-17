import { 
  Injectable, 
  HttpException, 
  HttpStatus, 
  UnauthorizedException 
} from '@nestjs/common';
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
    private jwtService: JwtService) 
    {}

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  };

  private async validateUser(createUserDto: CreateUserDto) {
    const user = await this.findExistedUser(createUserDto);
    const passwordEquals = await bcrypt.compare(String(createUserDto.password), String(user.password));
  
    if(user && passwordEquals) {
      return user;
    };

    throw new UnauthorizedException( {message: 'Некорректный емейл или пароль, проверьте данные' } )
  
  };

  async registration(createUserDto: CreateUserDto) {
    const existedUser = await this.userRepository.findOne({
      where: {
        login: createUserDto.login.trim()
      },
    });

    if (existedUser) {
       throw new HttpException('Данный логин уже существует', HttpStatus.BAD_REQUEST);
    };

    const hashPassword = await bcrypt.hash(String(createUserDto.password), 7);
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

  private async findExistedUser(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOne({
      where: {
        login: createUserDto.login.trim()
      },
    });
    
    if (!user) {
      throw new UnauthorizedException({message: 'Данный пользователь не найден, проверьте введённые данные или зарегистрируйтесь' });
    };

    return user;
  };
};
