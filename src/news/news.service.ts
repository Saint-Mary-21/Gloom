import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly repo: Repository<News>,
  ) {}
  async create(createNewsDto: CreateNewsDto): Promise<CreateNewsDto> {
    const { serviceName, description, professionalId, image, date, price } = createNewsDto;
    const news = new News();
    news.serviceName = serviceName;
    news.description = description;
    news.professionalId = professionalId;
    news.image = image;
    news.price = price;
    news.date = date;
    return await this.repo.save(news);
  }
  
  async saveImage(newsId: number, imageData: string) {
    const news = await this.repo.findOne({ where: { id: newsId.toString() } });
    news.image = imageData;
    await this.repo.save(news);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} news`;
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return `This action updates a #${id} news`;
  }

  remove(id: number) {
    return `This action removes a #${id} news`;
  }
}
