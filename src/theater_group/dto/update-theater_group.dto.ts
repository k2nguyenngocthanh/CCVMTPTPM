import { PartialType } from '@nestjs/swagger';
import { CreateTheaterGroupDto } from './create-theater_group.dto';

export class UpdateTheaterGroupDto extends PartialType(CreateTheaterGroupDto) {}
