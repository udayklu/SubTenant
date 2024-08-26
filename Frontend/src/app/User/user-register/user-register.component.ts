import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { AlertfyService } from '../../services/alertfy.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export class UserRegisterComponent implements OnInit {

  userSubmitted: boolean = false;
  registrationForm: FormGroup = new FormGroup({
    userName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)] ),
    confirmPassword: new FormControl(null, [Validators.required]),
    mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
  }, this.passwordMatchingValidator()
 ); 
  constructor(private fb: FormBuilder, 
    private userSerivce: UserService,
    private alertify: AlertfyService
  ) {}
  ngOnInit(): void {  
    //this.createRegFormBulider();
  }
 user : User | undefined;
  createRegFormBulider(){
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)] ],
      confirmPassword: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, {Validators: this.passwordMatchingValidator()}); 
  }
  passwordMatchingValidator(fg?: FormGroup): Validators {
    return fg?.get('password')?.value === fg?.get('confirmPassword')?.value ? false : true;
  }

  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }

  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

  regFormSubmit() : void{
    console.log(this.registrationForm);

    this.userSubmitted = true;
    if(this.registrationForm.valid){
      this.user = this.userData();
      this.userSerivce.addUser(this.user);
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertify.success("Congrats, you have registered!")
    } else {
      this.alertify.error("Please enter all required fields!")
    }
  }

  userData(): User {
    return this.user = {
      username: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }
}
