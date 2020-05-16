import { Module } from '@nestjs/common';
import { PublicModule } from './public/public.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [PublicModule, AdminModule]
})
export class AppModule {}
