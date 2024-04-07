import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { NewsModel } from "./model/news.model";
import { CreateNewsInput } from "./dto/create-news.dto";
import { GetNewsInput } from "./dto/get-news.dto";
@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewsModel)
    private readonly newsRepository: Repository<NewsModel>,
  ) {}

  async getAllNews(getNewsInput: GetNewsInput): Promise<NewsModel[]> {
    const { skip, limit } = getNewsInput;
    const news = await this.newsRepository.find({
      skip,
      take: limit,
      order: { created_at: "ASC" },
    });
    return news;
  }
  async createNews(createNewsInput: CreateNewsInput): Promise<NewsModel> {
    return await this.newsRepository.save(createNewsInput);
  }
}
