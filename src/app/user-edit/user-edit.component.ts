import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'ita-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private userListService: UserListService,
    private router: Router,
  ) { }

  update(user) {
    // on success navigate to list page with message
    this.userListService.updateUser(user).subscribe(
      user => this.router.navigate(['users', 'list'])
    )
  }

  cancel() {
    this.router.navigate(['users', 'list']);
  }

  ngOnInit(): void {
    console.log(this.route, 'Activate Route')
    const id = this.route.snapshot.params.id;
    // TODO: ajax
    this.userListService.getUser(id).subscribe(
      user => this.user = user
    )
  }

}
