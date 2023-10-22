import { Module } from '@nestjs/common';
import { TheaterSysService } from './theater_sys.service';
import { TheaterSysController } from './theater_sys.controller';

@Module({
  controllers: [TheaterSysController],
  providers: [TheaterSysService],
})
export class TheaterSysModule {}
