import { Module } from '@nestjs/common';
import { PublicModule } from './public/public.module';
import { AdminModule } from './admin/admin.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from './env.config';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';

@Module({
  imports: [
    PublicModule, 
    AdminModule,
    ConfigModule.forRoot(configuration)
  ],
})
export class AppModule {}
