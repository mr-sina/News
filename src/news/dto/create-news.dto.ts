import { InputType,  Field } from '@nestjs/graphql';
@InputType()
export class CreateNewsInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;
}