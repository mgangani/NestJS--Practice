import { Controller, Body, Post } from '@nestjs/common';
import { CreateTagDto } from './dtos/create-tag.dto';
import { TagsService } from './provider/tags.service';

@Controller('tags')
export class TagsController {

    constructor(
        private readonly tagsService: TagsService,
    ){}

    @Post()
    public create(@Body() createTagDto: CreateTagDto){
        return this.tagsService.create(createTagDto);
    }
}
