import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';

import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}
    
    async register({name, email, password}: RegisterDto){
        const user = await this.usersService.findOneByEmail(email);
        if (user) {
            throw new BadRequestException("User already exists");
        }
        
        return await this.usersService.create({
            name, 
            email, 
            password: await bcryptjs.hash(password, 10),
        });
    }

    async login({email, password}){
        const user = await this.usersService.findOneByEmail(email);
        
        if (!user) {
            throw new UnauthorizedException("Email is wrong");
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);

        if(!isPasswordValid)
        {
            throw new UnauthorizedException("Password is wrong");
        }

        const payload = { email: user.email };
        
        const token = await this.jwtService.signAsync(payload);

        return {
            token,
            email,
        }
    }
}
