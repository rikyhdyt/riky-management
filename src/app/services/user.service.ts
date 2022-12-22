import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers, IUsersWrapper } from '../interfaces/i-users';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint:string="/users"

  constructor(private baseService:BaseService, private httpClient:HttpClient) { }

  all():Observable<IUsersWrapper>{
    return this.httpClient.get<IUsersWrapper>(
      `${this.baseService.baseURL}${this.endpoint}`
    )
  }

  create(user:IUsers):Observable<IUsers>{
    const headers= {
      'Content-type':'application/json'
    };

    const body = JSON.stringify(user);

    return this.httpClient.post<IUsers>(
      `${this.baseService.baseURL}${this.endpoint}/add`,
      body,
      {headers}
    );
  }

  update(user:IUsers):Observable<IUsers>{
    const headers= {
      'Content-type':'application/json'
    };

    const {id, ...userClean}=user;

    const body = JSON.stringify(userClean);

    return this.httpClient.post<IUsers>(
      `${this.baseService.baseURL}${this.endpoint}/${id}`,
      body,
      {headers}
    );
  }

  delete(user:IUsers, id:number):Observable<IUsers>{
   
    return this.httpClient.delete<IUsers>(
      `${this.baseService.baseURL}${this.endpoint}/${id}`
    );
  }
}
