import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { StoreResponseComponent } from './components/store-response/store-response.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { RecoverResponseComponent } from './components/recover-response/recover-response.component';
import { AppComponent } from './app.component';
import { ResponseDetailComponent } from './components/response-detail/response-detail.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    StudentLoginComponent,
    StoreResponseComponent,
    UserLoginComponent,
    RecoverResponseComponent,
    AppComponent,
    ResponseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
