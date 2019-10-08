import { Component, OnInit } from "@angular/core";
import { UserWithId } from '../users.model';
import UsersApiService from '../../services/api-users.service';

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent implements OnInit {
  users: UserWithId[];
  request: UserWithId;
  constructor(private usersApiService: UsersApiService) {}

  ngOnInit() { 
    this.usersApiService.getUsers().subscribe(
      res => {
        this.users = res;
      }
    )
  };

  update(req) {
    const {_id, ...body} = req;
    delete body._id;
    delete body.__v;
    this.usersApiService.updateUser(_id, body).subscribe(res => {
      alert('Updated! :)');
    })
  };

  delete(id) {
    this.usersApiService.deleteUser(id).subscribe(res => {
      const index = this.users.findIndex(elem => elem._id == id);
      if (index > -1) this.users.splice(index, 1);
      alert('Deleted! :)')
    })
  };
}
