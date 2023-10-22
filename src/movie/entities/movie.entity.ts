import { ApiProperty } from '@nestjs/swagger';

export class Movie {
  @ApiProperty({ type: Number })
  ma_phim: number;
  @ApiProperty({ type: String })
  ten_phim: string;
  @ApiProperty({ type: String })
  trailer: string;
  @ApiProperty({ type: String })
  hinh_anh: string;
  @ApiProperty({ type: String })
  mo_ta: string;
  @ApiProperty({ type: Date })
  ngay_khoi_chieu: Date;
  @ApiProperty({ type: Number })
  danh_gia: number;
  @ApiProperty({ type: Boolean })
  hot: boolean;
  @ApiProperty({ type: Boolean })
  dang_chieu: boolean;
  @ApiProperty({ type: Boolean })
  sap_chieu: boolean;
}

export class uploadMovieDto {
  @ApiProperty({ type: String, format: 'binary' })
  hinh_anh: any;
}
