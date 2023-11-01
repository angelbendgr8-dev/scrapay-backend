import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private bookRepo: Repository<Book>) {}
  async create(createBookInput: CreateBookInput) {
    const user = this.bookRepo.create({ ...createBookInput });
    console.log(user);
    return await this.bookRepo.save(user);
  }

  async findAll() {
    return await this.bookRepo.find({});
  }

  async findOne(id: number) {
    return await this.bookRepo.findOneBy({ id: id });
  }

  async update(id: number, updateBookInput: UpdateBookInput) {
    const { id: bookId, ...rest } = updateBookInput;
     await this.bookRepo.update({ id: id }, rest);
    return rest;
  }

  async remove(id: number) {
    const book = await this.bookRepo.findOneBy({ id: id });
    await this.bookRepo.delete({ id: id });
    return book;
  }
}
