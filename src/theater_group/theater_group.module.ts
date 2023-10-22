import { Module } from '@nestjs/common';
import { TheaterGroupService } from './theater_group.service';
import { TheaterGroupController } from './theater_group.controller';

@Module({
  controllers: [TheaterGroupController],
  providers: [TheaterGroupService],
})
export class TheaterGroupModule {}
