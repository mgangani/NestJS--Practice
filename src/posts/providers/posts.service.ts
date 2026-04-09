import { CreatePostDto } from '../dtos/create-post.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';

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
  ) {}

  /**
   * Method to create a new post
   */
  public async create(createPostDto: CreatePostDto) {

    let author = await this.usersService.findOneById(createPostDto.authorId);

    if (!author) {
      throw new NotFoundException(
        `User with id ${createPostDto.authorId} not found`,
      );
    }
    const { authorId, metaOptions, tags, ...postFields } = createPostDto;
    let post = this.postsRepository.create({
      ...postFields,
      author: author,
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
    let posts = await this.postsRepository.find();

    return posts;
  }

  public async delete(id: number) {
    await this.postsRepository.delete(id);
    return { message: 'Post deleted successfully', postId: id };
  }
}
