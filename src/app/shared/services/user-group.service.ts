import { Injectable } from '@angular/core';
import { IUserGroup } from '../models/user-group.model';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {
  
  private userGroups: Array<IUserGroup> = [
    { 
        groupId: 1, 
        groupName: 'Galactic Explorers', 
        groupDescription: 'Embark on cosmic adventures to explore uncharted realms beyond the stars.',
    },
    { 
        groupId: 2, 
        groupName: 'Mystical Dreamweavers', 
        groupDescription: 'We specialize in turning dreams into reality, creating a tapestry of magical experiences.',
    },
    { 
        groupId: 3, 
        groupName: 'Cybernetic Innovators', 
        groupDescription: 'Pioneering the future with cutting-edge technology and pushing the boundaries of possibility.',
    },
    { 
        groupId: 4, 
        groupName: 'Time-Travel Enthusiasts', 
        groupDescription: 'Join us on a journey through the ages, exploring the past, present, and future.' 
    },
  ];

  getUserGroups(): Array<IUserGroup> {
    return this.userGroups;
  }
}
