import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private host = environment.gatewayServerUrl;

  constructor(private authenticationService: AuthenticationService) {}

  intercept(httpRequest: HttpRequest<unknown>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    if (this.checkFreePath(httpRequest.url)) {
      return httpHandler.handle(httpRequest);
    }
    
    this.authenticationService.loadToken();
    const token = this.authenticationService.getToken();
    if (token) {
      const request = httpRequest.clone({setHeaders: {Authorization: `Bearer ${token}`}});
      return httpHandler.handle(request);  
    } else {
      return httpHandler.handle(httpRequest);
    }
  }

  private checkFreePath(url: string): boolean {
    if (url.includes(`${this.host}/user-service/api/profile/login`)) {
      return true;
    }
    if (url.includes(`${this.host}/user-service/api/profile/register`)) {
      return true;
    }
    if (url.includes(`${this.host}/user-service/api/profile/password/reset`)) {
      return true;
    }
    if (url.includes(`${this.host}/user-service/api/profile/email/verify`)) {
      return true;
    }
    if (url.includes(`${this.host}/password-reset-service/api/password/reset`)) {
      return true;
    }
    if (url.includes(`${this.host}/email-verification-service/api/email/verify`)) {
      return true;
    }
    return false;
  }
}