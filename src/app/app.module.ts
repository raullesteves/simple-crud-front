import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms"
import { UsersCreateComponent } from './users/users-create/users-create.component';
import { UsersUpdateComponent } from './users/users-update/users-update.component';

@NgModule({
  declarations: [AppComponent, UsersListComponent, UsersCreateComponent, UsersUpdateComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
