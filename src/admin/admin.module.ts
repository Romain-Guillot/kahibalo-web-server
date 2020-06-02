import { Module, HttpModule } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { ConfigModule } from '@nestjs/config';


@Module({
    imports: [ConfigModule, HttpModule],
    controllers: [AdminController],
    providers: [AdminService]
})
export class AdminModule {}
