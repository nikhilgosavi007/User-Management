import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: Array<IUser> = [
    {
      userId: 1,
      username: 'nikhil003',
      email: 'nikhilgosavi003@gmail.com',
    },
    {
      userId: 2,
      username: 'nikhil003',
      email: 'nikhilgosavi003@gmail.com',
    },
    {
      userId: 3,
      username: 'nikhil003',
      email: 'nikhilgosavi003@gmail.com',
    },
  ];

  getUsers(): Array<IUser> {
    return this.users;
  }
}
