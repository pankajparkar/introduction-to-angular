import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ita-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: any;
  @Output() edit = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  editUser(user) {
    // this.router.navigate(['users', user.id]);
    // SOme edit event happened
    this.edit.emit(user);
  }

  ngOnInit(): void {
  }

}
