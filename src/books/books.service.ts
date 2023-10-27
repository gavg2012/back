import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>
  ) { }

  async create(createBookDto: CreateBookDto) {
    //const book = this.bookRepository.create(createBookDto);
    try {
      return await this.bookRepository.save(createBookDto);
    } catch(error) {
      return error;
    }
  }

  async findAll() {
    return await this.bookRepository.find();
  }

  async findOne(_id: number) {
    return await this.bookRepository.findOneBy({_id});
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
