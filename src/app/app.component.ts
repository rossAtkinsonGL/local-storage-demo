import { Component, OnDestroy } from '@angular/core';
import { LoginService } from './services/login.service';
import { Subject, takeUntil } from 'rxjs';
import { RecoverResponseService } from './services/recover-response.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  private destroyed = new Subject<void>();
  loggedIn: boolean = false; 
  viewingResponseDetails: boolean = false;

  constructor(private loginService: LoginService, private recoverResponseService: RecoverResponseService) {
    this.loginService.loggedIn$.pipe(takeUntil(this.destroyed)).subscribe(val => this.loggedIn = val);
    this.recoverResponseService.viewingResponseDetails$.pipe(takeUntil(this.destroyed)).subscribe(val => this.viewingResponseDetails = val);
  }
  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
