import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PostType } from '../enums/postType.enum';
import { PostStatus } from '../enums/postStatus.enum';
import { CreatePostMetaOptionsDto } from '../../meta-options/dtos/create-post-meta-options.dto';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'The title of the blog post',
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(512)
  title: string;

  @ApiProperty({
    enum: PostType,
    description: 'The type of the blog post',
    example: PostType.POST,
  })
  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType;

  @ApiProperty({
    description: 'The slug of the blog post',
    example: 'post-1',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'Slug must be a valid slug with only lowercase letters, numbers and hyphens',
  })
  @MaxLength(256)
  slug: string;

  @ApiProperty({
    enum: PostStatus,
    description: 'The status of the blog post',
    example: PostStatus.DRAFT,
  })
  @IsEnum(PostStatus)
  @IsNotEmpty()
  status: PostStatus;

  @ApiPropertyOptional({
    description: 'The content of the blog post',
    example: 'string',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description: 'The schema of the blog post',
    example:
      '{ "type": "object", "properties": { "title": { "type": "string" } } }',
  })
  @IsJSON()
  @IsOptional()
  schema?: string;

  @ApiPropertyOptional({
    description: 'The featured image of the blog post',
    example: 'https://example.com/image.jpg',
  })
  @IsOptional()
  @IsUrl()
  @MaxLength(1024)
  featuredImage?: string;

  @ApiPropertyOptional({
    description: 'The published on date of the blog post',
    example: '2026-01-01',
  })
  @IsISO8601()
  @IsOptional()
  publishedOn?: Date;

  @ApiPropertyOptional({
    description: 'The tags of the blog post',
    example: ['tag1', 'tag2'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          example: 'sidebarEnabled',
          description: 'The key of the meta option',
        },
        value: {
          type: 'any',
          example: true,
          description: 'The value of the meta option',
        },
      },
    },
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto[];
}
