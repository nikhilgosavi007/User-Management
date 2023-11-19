import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUserGroup } from '../../shared/models/user-group.model';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {

  userGroups: Array<IUserGroup> = [];

  userForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    group: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}
  private initForm() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      group: ['', Validators.required],
    });
  }

  onSubmit() {
    // if (this.userForm.valid) {
    //
    // }
  }

}
