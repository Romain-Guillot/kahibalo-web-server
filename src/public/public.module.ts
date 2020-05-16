import { Module, HttpModule } from '@nestjs/common';
import { PublicController } from './public.controller';
import { PublicService } from './public.services';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule, HttpModule],
    controllers: [PublicController],
    providers: [PublicService]
})
export class PublicModule {}
