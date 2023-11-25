import { ApiProperty } from '@nestjs/swagger';

export class userLoginType {
  @ApiProperty({ type: String })
  email: string;
  @ApiProperty({ type: String, format: 'password' })
  mat_khau: string;
}

export class userSignUpType {
  @ApiProperty({ type: String })
  ho_ten: string;
  @ApiProperty({ type: String })
  email: string;
  @ApiProperty({ type: String })
  so_dt: string;
  @ApiProperty({ type: String, format: 'password' })
  mat_khau: string;
  @ApiProperty({ type: String })
  avatar_img: string;
}
