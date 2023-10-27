import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/guard/auth.guard';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger/dist';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(
    private readonly authService: AuthService,
    private readonly booksService: BooksService) {}

  @Post()
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({
    description: 'Unauthorized Bearer Auth',
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @UseGuards(AuthGuard)
  create(@Body() {books}, createBookDto: CreateBookDto) {
    for(let i=0; i<books.length; i++)
    {
      //console.log(books[0]);
      createBookDto = books[i];
      //console.log(createBookDto);
      this.booksService.create(createBookDto);
    }
    //return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({
    description: 'Unauthorized Bearer Auth',
  })
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  /*@Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }*/
}
