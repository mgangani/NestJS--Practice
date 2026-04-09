import { CreatePostDto } from '../dtos/create-post.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { In, Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { Tag } from 'src/tags/tag.entity';
import { TagsService } from 'src/tags/provider/tags.service';
import { PatchPostDto } from '../dtos/patch-post.dto';

@Injectable()
export class PostsService {
  constructor(
    /*
     * Injecting Users Service
     */
    private readonly usersService: UsersService,

    /**
     * Injecting postsRepository
     */
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,

    /**
     * Inject metaOptionsRepository
     */
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,

    /**
     * Injecting tagsService
     */
    private readonly tagsService: TagsService,
  ) {}

  /**
   * Method to create a new post
   */
  public async create(createPostDto: CreatePostDto) {

    let author = await this.usersService.findOneById(createPostDto.authorId);

    let tags = await this.tagsService.findMultipleTags(createPostDto.tags ?? []);

    if (!author) {
      throw new NotFoundException(
        `User with id ${createPostDto.authorId} not found`,
      );
    }
    const { authorId, metaOptions, ...postFields } = createPostDto;
    let post = this.postsRepository.create({
      ...postFields,
      author: author,
      tags: tags,
      ...(metaOptions != null && {
        metaOptions: this.metaOptionsRepository.create({
          metaValue: metaOptions.metaValue,
        }),
      }),
    });

    return await this.postsRepository.save(post);
  }

  public async findAll(userId: string) {
    // find all posts
    let posts = await this.postsRepository.find({
      relations: {
        // metaOpt ions: true,
        author: true,
        // tags: true,
      }
    });

    return posts;
  }


  public async update(patchPostDto : PatchPostDto)
  {
     let tags = await this.tagsService.findMultipleTags(patchPostDto.tags?? []);
     let post = await this.postsRepository.findOneBy({
      id: patchPostDto.id,
     });
     if (!post) {
      throw new NotFoundException(`Post with id ${patchPostDto.id} not found`);
     }
     post!.title = patchPostDto.title ?? post!.title;
     post!.content = patchPostDto.content ?? post!.content;
     post!.status = patchPostDto.status ?? post!.status;
     post!.postType = patchPostDto.postType ?? post!.postType;
     post!.slug = patchPostDto.slug ?? post!.slug;
     post!.featuredImageUrl = patchPostDto.featuredImageUrl ?? post!.featuredImageUrl;
     post!.publishOn = patchPostDto.publishOn ?? post!.publishOn;
    //  post!.schema = patchPostDto.schema ?? post!.schema;
    //  post!.metaOptions = this.metaOptionsRepository.create({
    //   metaValue: patchPostDto.metaOptions?.metaValue ?? post!.metaOptions?.metaValue,
    //  });
     post!.tags = tags;
     return await this.postsRepository.save(post!);
  }

  public async delete(id: number) {
    await this.postsRepository.delete(id);
    return { message: 'Post deleted successfully', postId: id };
  }

}
