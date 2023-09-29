import { NgModule, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { StoreResponseComponent } from './components/store-response/store-response.component';
import { RecoverResponseComponent } from './components/recover-response/recover-response.component';
import { LoginService } from './services/login.service';
import { Subject, takeUntil } from 'rxjs';
import { ResponseDetailComponent } from './components/response-detail/response-detail.component';
import { RecoverResponseService } from './services/recover-response.service';

const routes: Routes = [  
  { path: '', redirectTo: '/StudentLogin', pathMatch: 'full' },
  { path: 'StudentLogin', component: StudentLoginComponent },
  { path: 'UserLogin', component: UserLoginComponent },
  { path: 'StoreResponse', component: StoreResponseComponent },
  { path: 'RecoverResponse', component: RecoverResponseComponent },  
  { path: 'ResponseDetail/:responsekey', component: ResponseDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnDestroy {  
  private destroyed = new Subject<void>();

  constructor(private router: Router, private loginService: LoginService, private recoverResponseService: RecoverResponseService) {
    this.router.events.pipe(
      takeUntil(this.destroyed)
    )
    .subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if(event.url.includes('Login')) {
          this.loginService.logout();
          return;
        }
        if (event.url.includes('RecoverResponse')) {
          this.recoverResponseService.viewingResponseDetails$.next(false);
        }
      }
    });
  }  
  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
