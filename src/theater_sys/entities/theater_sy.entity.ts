import { ApiProperty } from '@nestjs/swagger';

export class TheaterSys {
  @ApiProperty({ type: Number })
  ma_he_thong_rap: number;
  @ApiProperty({ type: String })
  ten_he_thong_rap: string;
  @ApiProperty({ type: String })
  logo: string;
}

export class uploadLogoRap {
  @ApiProperty({ type: String, format: 'binary' })
  hinh_anh: any;
}
