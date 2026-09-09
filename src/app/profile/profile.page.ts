import { Component, OnInit } from '@angular/core';
import { Profile, ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  profile: Profile | undefined;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profile = this.profileService.getProfile();
  }
}