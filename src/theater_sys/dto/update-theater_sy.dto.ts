import { PartialType } from '@nestjs/swagger';
import { CreateTheaterSyDto } from './create-theater_sy.dto';

export class UpdateTheaterSyDto extends PartialType(CreateTheaterSyDto) {}
