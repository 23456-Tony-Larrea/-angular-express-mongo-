import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 url='http://localhost:3000/user/'
  constructor(private http:HttpClient) { }
  
  getUsers():Observable<any>{
    return this.http.get(this.url);
  }
  deleteUsers(id:any):Observable<any>{
   return this.http.delete(this.url+id);
  }
  insertUsers(user:Users):Observable<any>{
    return this.http.post(this.url,user);
  }
  getUserById(id:any):Observable<any>{
    return this.http.get(this.url+id);
  }
  editUsers(id:any,user:Users){
   return this.http.patch(this.url +id,user);
  }
}
