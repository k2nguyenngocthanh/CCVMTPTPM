import { ApiProperty } from '@nestjs/swagger';

export class Theater {
  @ApiProperty({ type: Number })
  ma_rap: number;
  @ApiProperty({ type: String })
  ten_rap: string;
  @ApiProperty({ type: Number })
  ma_cum_rap: number;
}
