import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(
    private http: HttpClient,
  ) { }

  getUserList() {
    const users = this.http.get<any>('https://jsonplaceholder.typicode.com/users'); 
    return users;
  }

  getUser(id) {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  updateUser(user) {
    return this.http.put<any>(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
  }
}
