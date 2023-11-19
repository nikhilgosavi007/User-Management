import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUserGroup } from '../../shared/models/user-group.model';
import { UserGroupService } from '../../shared/services/user-group.service';

@Component({
  selector: 'app-user-group-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-group-list.component.html',
  styleUrl: './user-group-list.component.scss'
})
export class UserGroupListComponent implements OnInit{
  userGroups: Array<IUserGroup> = [];

  constructor(private userGroupService: UserGroupService) {}

  ngOnInit() {
    this.userGroups = this.userGroupService.getUserGroups();
  }
}
