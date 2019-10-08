import { Component, OnInit } from '@angular/core';
import { User } from '../users.model';
import UsersApiService from '../../services/api-users.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {

  request: User = {
    name: '',
    mail: '',
    role: '',
  }

  response: User;

  constructor(private usersApiService: UsersApiService) { }

  ngOnInit() { }

  save() {
    this.usersApiService.createUser(this.request).subscribe(res => {
      location.reload();
      alert('Success :)')
    })
  }

}