import { Transform } from "class-transformer";
import { IsString, MinLength, IsEmail } from "class-validator";

export class RegisterDto {
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(1)
    name: string;

    @IsEmail()
    email: string;

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(6)
    password: string;
}
