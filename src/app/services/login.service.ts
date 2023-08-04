import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient: HttpClient) { }

  private readonly baseUrl = environment["endPoint"];


  login(email: string, password: string) {
    return this.httpclient.post<any>(`${this.baseUrl}/CreateToken`, { Email: email, password: password })
  }


}
