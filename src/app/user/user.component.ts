import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataModel } from '../shared/data.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 users: User[];
 // constructor(private userService: UserService, private router: ActivatedRoute) { }

  // ngOnInit() {
  //   this.users = this.router.snapshot.data.users;

  // }
 // users: User[] = [];
 // operation: String = 'add';
  selectedUser: User;
  user: User = new User();
  usersModel: DataModel[];
  userForm: FormGroup;

  constructor(private userService: UserService,
      private fb: FormBuilder,
      private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.users = this.route.snapshot.data.users;

      this.userForm = this.fb.group({
   //     id: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        enable: ['', Validators.required],
                    });

                  this.usersModel = [
                      // new DataModel( 'id', 'ID', 'number', true, []),
                 //     new DataModel( 'id', 'ID', 'number', false, []),
                      new DataModel( 'username', 'Nom d\'utilsateur', 'string', false, []),
                      new DataModel( 'password', 'Mot de passe', 'password', false, []),
                      new DataModel( 'enable', 'Actif', 'number', true, [])
                  ];
  }


}
