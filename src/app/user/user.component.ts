import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.router.snapshot.data.users;

  }

}
