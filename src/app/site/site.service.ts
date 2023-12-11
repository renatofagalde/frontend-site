import {Injectable} from '@angular/core';
import {LikwiHttp} from "../seguranca/likwi-http";
import {environment} from "../../environments/environment";
import {Site} from "./site.model";


@Injectable()
export class SiteService {

    private url: string;

    constructor(private http: LikwiHttp) {
        this.url = `${environment.apiURL}`;
    }

    list(): Promise<any> {
        return this.http.get<any>(`${this.url}`)
            .toPromise();

    }

    get():Promise<Site>{
        // @ts-ignore
        return this.http.get<Site>(`${this.url}/1`)
            .toPromise();
    }


}
