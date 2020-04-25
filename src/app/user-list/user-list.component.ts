import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'ita-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any[];
  selectedUser: any;

  sample = 1;

  constructor(
    private userListService: UserListService,
  ) { }

  editUser(user) {
    console.log(user, 'User');
    this.selectedUser = user;
  }

  ngOnInit(): void {
    this.userListService.getUserList().subscribe(
      // Next emit
      users => this.users = users
    );
  }

}
