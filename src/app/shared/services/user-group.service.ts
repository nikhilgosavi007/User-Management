import { Injectable } from '@angular/core';
import { IUserGroup } from '../models/user-group.model';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {

  getUserGroups(): Array<IUserGroup> {
    return this.userGroups;
  }
  
  private userGroups: Array<IUserGroup> = [
    { 
        groupId: 1, 
        groupName: 'Galactic Explorers', 
        groupDescription: 'Embark on cosmic adventures to explore uncharted realms beyond the stars.',
        users: [
          {
            userId: 54321,
            username: "MidnightMystery",
            email: "midnight.mystery@example.com"
          }
        ]
    },
    { 
        groupId: 2, 
        groupName: 'Mystical Dreamweavers', 
        groupDescription: 'We specialize in turning dreams into reality, creating a tapestry of magical experiences.',
        users: [
          {
            userId: 24680,
            username: 'SilverShadow',
            email: 'silver.shadow@example.com'
          },
          {
            userId: 11122,
            username: 'BlazingPhoenix',
            email: 'blazing.phoenix@example.com'
          },
          {
            userId: 33344,
            username: 'MysticMoon',
            email: 'mystic.moon@example.com'
          },
        ] 
    },
    { 
        groupId: 3, 
        groupName: 'Cybernetic Innovators', 
        groupDescription: 'Pioneering the future with cutting-edge technology and pushing the boundaries of possibility.', 
        users: [
          {
            userId: 54321,
            username: "MidnightMystery",
            email: "midnight.mystery@example.com"
          },
          {
            userId: 98765,
            username: "DreamyDragon",
            email: "lucky.lion@example.com"
          }
        ]
    },
    { 
        groupId: 4, 
        groupName: 'Time-Travel Enthusiasts', 
        groupDescription: 'Join us on a journey through the ages, exploring the past, present, and future.' 
    },
    { 
      groupId: 5, 
      groupName: 'Galactic Explorers', 
      groupDescription: 'Embark on cosmic adventures to explore uncharted realms beyond the stars.',
      users: [
        {
          userId: 54321,
          username: "StellarSeeker",
          email: "stellar.seeker@example.com"
        },
        {
          userId: 87654,
          username: "NebulaNavigator",
          email: "nebula.navigator@example.com"
        }
      ]
  },
  { 
      groupId: 6, 
      groupName: 'Mystical Dreamweavers', 
      groupDescription: 'We specialize in turning dreams into reality, creating a tapestry of magical experiences.',
      users: [
        {
          userId: 24680,
          username: 'DreamDancer',
          email: 'dream.dancer@example.com'
        },
        {
          userId: 11122,
          username: 'EnchantedSorcerer',
          email: 'enchanted.sorcerer@example.com'
        },
        {
          userId: 33344,
          username: 'WhimsicalWizard',
          email: 'whimsical.wizard@example.com'
        },
      ] 
  },
  { 
      groupId: 7, 
      groupName: 'Cybernetic Innovators', 
      groupDescription: 'Pioneering the future with cutting-edge technology and pushing the boundaries of possibility.', 
      users: [
        {
          userId: 54321,
          username: "TechTrailblazer",
          email: "tech.trailblazer@example.com"
        },
        {
          userId: 98765,
          username: "DigitalPioneer",
          email: "digital.pioneer@example.com"
        }
      ]
  },
  { 
      groupId: 8, 
      groupName: 'Time-Travel Enthusiasts', 
      groupDescription: 'Join us on a journey through the ages, exploring the past, present, and future.',
      users: [
        {
          userId: 76543,
          username: "ChronoExplorer",
          email: "chrono.explorer@example.com"
        },
        {
          userId: 87654,
          username: "TemporalTraveler",
          email: "temporal.traveler@example.com"
        }
      ] 
  },
  { 
      groupId: 9, 
      groupName: 'Oceanic Nomads', 
      groupDescription: 'Sail the seas and discover hidden treasures beneath the waves.',
      users: [
        {
          userId: 12345,
          username: "AquaAdventurer",
          email: "aqua.adventurer@example.com"
        },
        {
          userId: 67890,
          username: "SeaSiren",
          email: "sea.siren@example.com"
        }
      ]
  },
  { 
      groupId: 10, 
      groupName: 'Celestial Artisans', 
      groupDescription: 'Crafting wonders inspired by the cosmos, where art meets the infinite.',
      users: [
        {
          userId: 11223,
          username: "StardustSculptor",
          email: "stardust.sculptor@example.com"
        },
        {
          userId: 44556,
          username: "GalacticPainter",
          email: "galactic.painter@example.com"
        }
      ]
  }
  ];
}
