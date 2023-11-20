import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../../features/user-list/user-list.component';
import { UserGroupListComponent } from '../../features/user-group-list/user-group-list.component';
import { UserFormComponent } from '../../features/user-form/user-form.component';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    UserListComponent,
    UserGroupListComponent,
    UserFormComponent
  ],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {
  activeTab = 'Users'
}
