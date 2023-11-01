import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field(type => Int, { description: 'The primary id of a book' })
  id: number;

  @Field(type => String, { description: 'The name of the book '})
  name: string;

  @Field(type => String, { description: 'The description of the book' })
  description: string;
}
