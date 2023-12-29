import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import * as _ from 'lodash'

export class NotAuthenticatedError {
}

@Injectable()
export class LikwiHttp extends HttpClient {

    constructor(private httpHandler: HttpHandler) {
        super(httpHandler);
    }

    public override delete<T>(url: string, options?: any): Observable<T> {
        return this.fazerRequisicao<T>(() => super.delete<T>(url, options));
    }

    public override patch<T>(url: string, body: any, options?: any): Observable<T> {
        return this.fazerRequisicao<T>(() => super.patch<T>(url, options));
    }

    public override head<T>(url: string, options?: any): Observable<T> {
        return this.fazerRequisicao<T>(() => super.head<T>(url, options));
    }

    public override options<T>(url: string, options?: any): Observable<T> {
        return this.fazerRequisicao<T>(() => super.options<T>(url, options));
    }

    public override get<T>(url: string, options?: any): Observable<T> {
        return this.fazerRequisicao<T>(() => super.get<T>(url, options)
            .pipe(map(response=> {
                return _.mapKeys(response,(v,k)=>_.camelCase(k));
            } )));
    }

    public override post<T>(url: string, body: any, options?: any): Observable<T> {
        return this.fazerRequisicao<T>(() => super.post<T>(url, body, options));
    }

    public override put<T>(url: string, body: any, options?: any): Observable<T> {
        return this.fazerRequisicao<T>(() => super.put<T>(url, body, options));
    }

    private fazerRequisicao<T>(fn: Function): Observable<T> {
        return fn();
    }


}
