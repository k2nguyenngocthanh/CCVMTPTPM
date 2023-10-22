import { ApiProperty } from '@nestjs/swagger';

export class TheaterGroup {
  @ApiProperty({ type: Number })
  ma_cum_rap: number;
  @ApiProperty({ type: String })
  ten_cum_rap: string;
  @ApiProperty({ type: String })
  dia_chi: string;
  @ApiProperty({ type: Number })
  ma_he_thong_rap: string;
}
