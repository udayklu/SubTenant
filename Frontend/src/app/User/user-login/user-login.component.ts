import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertfyService } from '../../services/alertfy.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  constructor(private alertfy: AlertfyService,
    private authService: AuthService,
    private router: Router
  ){}

  userSubmitted: boolean = false;
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  }); 

  get userName(){
    return this.loginForm.get('userName') as FormControl;
  }

  get password(){
    return this.loginForm.get('password') as FormControl;
  }

  loginFormSubmit() : void{
    this.userSubmitted = true;
      const token = this.authService.loginUser({username: this.userName?.value, password: this.password?.value} as User);
      if(token) {
        localStorage.setItem('token', token.username);
        this.userSubmitted = false;
        this.router.navigate(['/']);
        this.alertfy.success("Congrats, Login successful");
        this.loginForm.reset();
      } else {
        this.alertfy.error("Login not successful");
      }
  }
}
