import { User } from "src/users/user.entity";
import { PostType } from "./enums/postType.enum";
import { PostStatus } from "./enums/postStatus.enum";

export class Post {
    title: string;
    postType: PostType;
    slug: string;
    status: PostStatus;
    author: User;
}