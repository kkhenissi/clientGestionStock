import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
@Injectable({
    providedIn: 'root'
})
export class XhrInterceptor implements HttpInterceptor {

constructor(private cookieService: CookieService) {

}

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const token = this.cookieService.get('token');
        const xhr = req.clone({
            headers: req.headers.set('authorization', `Basic ${token}`)
        });

        console.log('*****************next.handle(xhr);*************', next.handle(xhr));
        return next.handle(xhr);

    }
}
