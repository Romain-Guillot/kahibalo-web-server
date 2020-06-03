import { Module, HttpModule } from '@nestjs/common';
import { PublicController } from './public.controller';
import { PublicService } from './public.services';
import { ConfigModule } from '@nestjs/config';
import { MarkdownService } from 'src/markdown.service';

@Module({
    imports: [ConfigModule, HttpModule],
    controllers: [PublicController],
    providers: [PublicService, MarkdownService]
})
export class PublicModule {}
