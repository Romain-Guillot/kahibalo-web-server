import { Module, HttpModule } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { ConfigModule } from '@nestjs/config';
import { MarkdownService } from '../markdown.service';
import { PublicService } from 'src/public/public.services';


@Module({
    imports: [ConfigModule, HttpModule],
    controllers: [AdminController],
    providers: [AdminService, PublicService, MarkdownService]
})
export class AdminModule {}
