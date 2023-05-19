import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";
import {IncomingUserDTO} from "../models/IncomingUserDTO";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: IncomingUserDTO[];

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users.map(incomingUserDTO => incomingUserDTO);
    }, (error => {
      // this.loggingService.logException(new Error(error.error.message));
    }));
  }
}
