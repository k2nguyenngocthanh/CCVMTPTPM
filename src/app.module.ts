import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MovieModule } from './movie/movie.module';
import { TheaterModule } from './theater/theater.module';
import { BannerModule } from './banner/banner.module';
import { TheaterGroupModule } from './theater_group/theater_group.module';
import { TheaterSysModule } from './theater_sys/theater_sys.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MovieModule,
    TheaterModule,
    BannerModule,
    TheaterGroupModule,
    TheaterSysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
