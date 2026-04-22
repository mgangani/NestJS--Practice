import {
  BadRequestException,
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/provider/tags.service';
import { Tag } from 'src/tags/tag.entity';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PatchPostDto } from '../dtos/patch-post.dto';
import { Post } from '../post.entity';
import { GetPostsDto } from '../dtos/get-posts.dto';

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

    let tags = await this.tagsService.findMultipleTags(
      createPostDto.tags ?? [],
    );

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

  public async findAll(postQuery : GetPostsDto, userId: string | undefined) {
    // find all posts
    let posts = await this.postsRepository.find({
      relations: {
        // metaOpt ions: true,
        author: true,
        // tags: true,
      },
      skip : (postQuery.page - 1) * postQuery.limit,
      take: postQuery.limit,
    });

    return posts;
  }

  public async update(patchPostDto: PatchPostDto) {
    let tags: Tag[] | null = null;
    let post: Post | null = null;

    try {
      tags = await this.tagsService.findMultipleTags(patchPostDto.tags ?? []);
    } catch (error) {
      throw new RequestTimeoutException(
        'unable to process your request at the moment please try again',
      );
    }
    if (!tags || tags.length !== patchPostDto.tags?.length) {
      throw new BadRequestException(
        'please check your tag ids and ensure they are correct.',
      );
    }

    try {
      post = await this.postsRepository.findOneBy({
        id: patchPostDto.id,
      });
    } catch (error) {
      throw new RequestTimeoutException(
        'unable to process your request at the moment please try again',
      );
    }
    if (!post) {
      throw new NotFoundException(`Post with id ${patchPostDto.id} not found`);
    }
    post!.title = patchPostDto.title ?? post!.title;
    post!.content = patchPostDto.content ?? post!.content;
    post!.status = patchPostDto.status ?? post!.status;
    post!.postType = patchPostDto.postType ?? post!.postType;
    post!.slug = patchPostDto.slug ?? post!.slug;
    post!.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post!.featuredImageUrl;
    post!.publishOn = patchPostDto.publishOn ?? post!.publishOn;
    //  post!.schema = patchPostDto.schema ?? post!.schema;
    //  post!.metaOptions = this.metaOptionsRepository.create({
    //   metaValue: patchPostDto.metaOptions?.metaValue ?? post!.metaOptions?.metaValue,
    //  });
    post!.tags = tags;

    try {
      await this.postsRepository.save(post!);
    } catch (error) {
      throw new RequestTimeoutException(
        'unable to process your request at the moment please try again',
      );
    }
    return post;
  }

  public async delete(id: number) {
    await this.postsRepository.delete(id);
    return { message: 'Post deleted successfully', postId: id };
  }
}
