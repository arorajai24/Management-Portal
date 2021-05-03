import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor{
    intercept(request : HttpRequest<any>, next: HttpHandler){
    
        if(request.headers.get("skip"))
        {
            return next.handle(request);
        }
        const authToken = localStorage.getItem('token');
        const identity = localStorage.getItem('id');
        const authReq = request.clone({setHeaders : { id : identity, authorization : authToken}})
        return next.handle(authReq);
    }
}