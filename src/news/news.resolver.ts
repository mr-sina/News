import {
  Args,
  Mutation,
  Query,
  Resolver,
} from "@nestjs/graphql";
import { NewsModel } from "./model/news.model";
import { NewsService } from "./news.service";
import { CreateNewsInput } from "./dto/create-news.dto";
import { GetNewsInput } from "./dto/get-news.dto";

@Resolver(() => NewsModel)
export class NewsResolver {
  constructor(private newsService: NewsService) {}

  @Query(() => [NewsModel])
  async getAllNews(@Args("input") input: GetNewsInput):Promise<NewsModel[]> {
    return this.newsService.getAllNews(input);
  }

  @Mutation(() => NewsModel)
  async createNews(@Args("input") input: CreateNewsInput):Promise<NewsModel> {
    return this.newsService.createNews(input);
  }
}
