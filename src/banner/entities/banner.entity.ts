import { ApiProperty } from '@nestjs/swagger';

export class Banner {
  @ApiProperty({ type: Number })
  ma_banner: number;
  @ApiProperty({ type: Number })
  ma_phim: number;
  @ApiProperty({ type: String })
  hinh_anh: string;
}

export class uploadBannerDto {
  @ApiProperty({ type: String, format: 'binary' })
  hinh_anh: any;
}
