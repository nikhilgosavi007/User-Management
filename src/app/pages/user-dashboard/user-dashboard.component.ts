import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../../features/user-list/user-list.component';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    UserListComponent
  ],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {}
