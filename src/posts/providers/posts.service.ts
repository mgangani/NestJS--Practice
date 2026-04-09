import { CreatePostDto } from '../dtos/create-post.dto';
import { Injectable } from '@nestjs/common';
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
    const { metaOptions: metaOptionsDto, ...postData } = createPostDto;

    // Create the metaOptions first if they exist
    let metaOptions = metaOptionsDto
      ? this.metaOptionsRepository.create(metaOptionsDto)
      : null;

    if (metaOptions) {
      await this.metaOptionsRepository.save(metaOptions);
    }

    // Create the post
    let post = this.postsRepository.create({
      ...postData,
    });

    // If meta options exist add them to post
    if (metaOptions) {
      post.metaOptions = metaOptions;
    }

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
