
import { InputType, Field, Int} from '@nestjs/graphql';

@InputType()
export class GetNewsInput {
  @Field(() => Int)
  skip: number;

  @Field(() => Int)
  limit: number;
}