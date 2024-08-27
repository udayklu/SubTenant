import { Component } from '@angular/core';
import { AlertfyService } from '../../services/alertfy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private alertfy: AlertfyService,
    private router: Router
  ){}
  loggedInUser: any;

  loggedIn(){
    this.loggedInUser = localStorage.getItem('token');
    return this.loggedInUser;
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['user/login']);
    this.alertfy.success('Successfully logged out.');
  }
}
 