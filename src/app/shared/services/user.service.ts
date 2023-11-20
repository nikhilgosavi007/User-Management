import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers(): Array<IUser> {
    return this.users;
  }

  private users: Array<IUser> = [
    {
      userId: 1,
      username: "MidnightMystery",
      email: "midnight.mystery@example.com",
      groups: [
        {
          groupId: 1,
          groupName: 'developers',
          groupDescription: 'Developers of Munich'
        },
        {
          groupId: 3,
          groupName: 'designers',
          groupDescription: 'Creative Designers Guild'
        }
      ]
    },
    {
      userId: 2,
      username: "SilverShadow",
      email: "silver.shadow@example.com",
      groups: [
        {
          groupId: 2,
          groupName: 'writers',
          groupDescription: 'Ink & Quill Wordsmiths'
        },
        {
          groupId: 4,
          groupName: 'scientists',
          groupDescription: 'Curious Minds Society'
        }
      ]
    },
    {
      userId: 3,
      username: "DreamyDragon",
      email: "dreamy.dragon@example.com",
      groups: [
        {
          groupId: 1,
          groupName: 'developers',
          groupDescription: 'Developers of Munich'
        },
        {
          groupId: 5,
          groupName: 'artists',
          groupDescription: 'Dreamweaver Artists Collective'
        }
      ]
    },
    {
      userId: 4,
      username: "TechTrailblazer",
      email: "tech.trailblazer@example.com",
      groups: [
        {
          groupId: 3,
          groupName: 'designers',
          groupDescription: 'Creative Designers Guild'
        },
        {
          groupId: 6,
          groupName: 'engineers',
          groupDescription: 'Innovative Engineers Society'
        }
      ]
    },
    {
      userId: 5,
      username: "AquaAdventurer",
      email: "aqua.adventurer@example.com",
      groups: [
        {
          groupId: 5,
          groupName: 'marine-biologists',
          groupDescription: 'Oceanic Explorers and Researchers'
        },
        {
          groupId: 2,
          groupName: 'writers',
          groupDescription: 'Ink & Quill Wordsmiths'
        }
      ]
    },
    {
      userId: 6,
      username: "StardustSculptor",
      email: "stardust.sculptor@example.com",
      groups: [
        {
          groupId: 6,
          groupName: 'artists',
          groupDescription: 'Dreamweaver Artists Collective'
        },
        {
          groupId: 4,
          groupName: 'scientists',
          groupDescription: 'Curious Minds Society'
        }
      ]
    }
  ];
}
