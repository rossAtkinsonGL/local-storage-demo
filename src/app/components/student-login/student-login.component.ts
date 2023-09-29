import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    this.loginService.studentLogin(this.username, this.password);
    this.router.navigate(['/StoreResponse']);
  }
}
