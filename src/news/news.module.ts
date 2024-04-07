import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NewsModel } from "./model/news.model";
import { NewsResolver } from "./news.resolver";
import { NewsService } from "./news.service";

@Module({
  imports: [TypeOrmModule.forFeature([NewsModel])],
  providers: [NewsResolver, NewsService],
})
export class NewsModule {}
