import { IsString, MinLength, IsInt, IsPositive, IsArray, IsOptional } from "class-validator";

export class CreateBookDto {
    @IsString()
    @MinLength(1)
    title: string;

    @IsString()
    @MinLength(1)
    isbn: string;

    @IsInt()
    @IsPositive()
    pageCount: number;

    @IsString()
    publishedDate: string;

    @IsString()
    @MinLength(1)
    thumbnailUrl: string;

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
    status: string;

    @IsArray()
    authors: string[];
}
