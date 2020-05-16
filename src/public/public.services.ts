import { Injectable, HttpService } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import urljoin = require('url-join');
import { AxiosResponse } from 'axios'

@Injectable()
export class PublicService {
    private base_url: string;

    constructor(private configService: ConfigService, private httpService: HttpService) {
        this.base_url = configService.get('SERVER_BASE_URL');
    }

    async retrieveListEntries(): Promise<any> {
        let response = await this.httpService.get(urljoin(this.base_url, "entries")).toPromise();
        if (response.status !== 200)
            throw new Error();
        return response.data;
    }

    async retrieveEntry(id: string): Promise<any> {
        let response = await this.httpService.get(urljoin(this.base_url, 'entries', id)).toPromise();
        if (response.status !== 200)
            throw new Error();
        return response.data;
    }
}