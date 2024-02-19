import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../services/custom-validators';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hasError: boolean = false;
  constructor(private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.initForm();    
  }

  initForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, CustomValidators.passwordValidation]],
      rememberMe: [false]
    });
  }

  getControl(key: string): any {
    return this.loginForm.get(key);
  }

  login(): void {
    if (this.loginForm.valid) {
      this.loginService.validateUser(this.loginForm.value.userName, this.loginForm.value.password).subscribe((isValid) => {
        if (isValid) {
          sessionStorage.setItem('user', JSON.stringify(this.loginForm.value));
          this.loginService.user$.next(this.loginForm.value);
          this.router.navigate(['/home']);
        } else {
          this.handleError();
        }
      });
    } else {
      this.handleError();
    }
  }
  
  clearError() {
    if (this.hasError) {
      this.hasError = false;
    }
  }

  handleError() {
    this.hasError = true;
    // setTimeout(() => {
    //   this.hasError = false;
    // }, 2000)
  }
}
