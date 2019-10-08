import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User, UserWithId } from "../users/users.model";

@Injectable({
  providedIn: "root"
})
export default class ApiUsersService {
  constructor(private http: HttpClient) {}
  apiUrl = "http://localhost:3000";

  getUsers(): Observable<UserWithId[]> {
    return this.http.get<UserWithId[]>(`${this.apiUrl}/user`);
  };
  
  createUser(req: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/user`, req);
  };

  getUserById(_id: String): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/${_id}`);
  };

  updateUser(_id: String, req: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/user/${_id}`, req);
  };

  deleteUser(_id: String): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/user/${_id}`);
  };

}
