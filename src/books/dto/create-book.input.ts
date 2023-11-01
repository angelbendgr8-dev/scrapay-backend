import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  
  @Field((type) => String, { description: 'The name of the book ' })
  name: string;

  @Field((type) => String, { description: 'The description of the book' })
  description: string;
}
