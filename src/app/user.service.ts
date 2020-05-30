import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  getUserList() {
    const users = this.http.get<any>('https://jsonplaceholder.typicode.com/users'); 
    return users;
  }

  getUser(id) {
    const user = this.http.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`); 
    return user;
  }
}
