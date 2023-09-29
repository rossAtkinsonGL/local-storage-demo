import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    this.loginService.userLogin(this.username, this.password);
    this.router.navigate(['/RecoverResponse']);
  }
}
