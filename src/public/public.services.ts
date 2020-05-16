import { Injectable, HttpService } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { join } from 'path';

@Injectable()
export class PublicService {
    private base_url: string;

    constructor(private configService: ConfigService, private httpService: HttpService) {
        this.base_url = configService.get('SERVER_BASE_URL');
    }

    async retrieveListEntries(): Promise<any> {
        return await this.httpService.get(join(this.base_url, "entries")).toPromise();
    }

    async retrieveEntry(id: string): Promise<any> {
        return await this.httpService.get(join(this.base_url, 'entries', id)).toPromise();
    }
    
}