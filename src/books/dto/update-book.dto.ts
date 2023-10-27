import { IsString, MinLength, IsInt, IsPositive, IsArray, IsOptional } from "class-validator";

export class UpdateBookDto {
    @IsString()
    @MinLength(1)
    @IsOptional()
    title?: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    isbn?: string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    pageCount?: number;

    @IsString()
    @IsOptional()
    publishedDate?: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    thumbnailUrl?: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    shortDescription?: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    longDescription?: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    status?: string;

    @IsArray()
    @IsOptional()
    authors?: string[];
}
