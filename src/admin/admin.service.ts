import { Injectable, HttpService } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import urljoin = require('url-join');


@Injectable()
export class AdminService {
    private base_url: string;

    constructor(private configService: ConfigService, private httpService: HttpService) {
        this.base_url = configService.get('SERVER_BASE_URL');
    }

    
    async addEntry(entry) {
        let response = await this.httpService.post(urljoin(this.base_url, "entries"), entry).toPromise();
        if (response.status !== 201)
            throw new Error();
        return response.data;
    }

    async editEntry() {

    }
}