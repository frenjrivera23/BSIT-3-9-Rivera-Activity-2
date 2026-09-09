import { Injectable } from '@angular/core';

export interface Profile {
  username: string;
  email: string;
  address: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profile: Profile = {
    username: 'Fren-J',
    email: 'frenjrivera@gmail.com',
    address: '372 Tata Andres St. Parada, Valenzuela City',
    avatar: 'assets/profile-avatar.jpg',
  };

  getProfile(): Profile {
    return this.profile;
  }
}