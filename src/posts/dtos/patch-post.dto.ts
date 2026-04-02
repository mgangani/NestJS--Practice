import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

export class PatchPostDto extends PartialType(CreatePostDto) {
  @ApiProperty({
    description: 'The id of the blog post',
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}
