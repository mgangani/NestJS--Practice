import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";


export class GetUsersParamDto{
    @ApiPropertyOptional({
        description: 'Get user by id',
        example: 1,
        required: false
    })
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    id?: number;
}