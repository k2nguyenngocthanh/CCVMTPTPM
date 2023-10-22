import { ApiProperty } from '@nestjs/swagger';

export class userLoginType {
  @ApiProperty({ type: String })
  email: string;
  @ApiProperty({ type: String, format: 'password' })
  password: string;
}

export class nguoiDungDto {
  @ApiProperty({ type: Number })
  tai_khoan: number;
  @ApiProperty({ type: String })
  ho_ten: string;
  @ApiProperty({ type: String })
  email: string;
  @ApiProperty({ type: String })
  so_dt: string;
  @ApiProperty({ type: String })
  mat_khau: string;
  @ApiProperty({ type: String })
  loai_nguoi_dung: string;
}
