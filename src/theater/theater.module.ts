import { Module } from '@nestjs/common';
import { TheaterService } from './theater.service';
import { TheaterController } from './theater.controller';

@Module({
  controllers: [TheaterController],
  providers: [TheaterService],
})
export class TheaterModule {}
