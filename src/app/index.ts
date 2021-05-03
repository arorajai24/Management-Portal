import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeaderInterceptor } from './http-interceptor';

export const httpInterceptProviders = [
    {
        provide :HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi : true
    },
    // {
    //     provide :HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi : true
    // }
]