import {Injectable} from '@angular/core';
import {LikwiHttp} from "../seguranca/likwi-http";
import {environment} from "../../environments/environment";
import {Observable, map, retry, catchError, throwError} from "rxjs";
import {Site} from "./site";


@Injectable({
    providedIn: 'root',
})
export class SiteService {

    private url: string;

    constructor(private http: LikwiHttp) {
        this.url = `${environment.apiURL}`;
    }

    list(): Promise<any> {
        return this.http.get<any>(`${this.url}`)
            .toPromise();
    }

    get():Observable<Site>{
        return this.http.get<Site>(`${this.url}/1`)
            .pipe(retry(1),catchError(err => this.errorHandler(err)))
    }

    // Error handling
    errorHandler(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(() => {
            return errorMessage;
        });
    }

}
