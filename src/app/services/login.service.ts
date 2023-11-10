import { Injectable } from '@angular/core';
import { RecoverResponseService } from './recover-response.service';
import { BehaviorSubject } from 'rxjs';
import { uniqueNamesGenerator, names, Config } from 'unique-names-generator';
import { IStudent } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentStudent$: BehaviorSubject<IStudent> = new BehaviorSubject<IStudent>({} as IStudent);

  constructor(private recoverResponseService: RecoverResponseService) { }

  studentLogin(username: string, password: string): void {
    const userTestID = crypto.randomUUID();

    const responseKey = this.recoverResponseService.checkResponseExists(userTestID);

    const config: Config = {
      dictionaries: [names]
    };

    const forename: string = uniqueNamesGenerator(config);
    const surname: string = uniqueNamesGenerator(config);

    const student: IStudent = {
      userTestID: userTestID,
      forename: forename,
      surname: surname,
      responseKey: responseKey
    };

    this.currentStudent$.next(student);
    this.loggedIn$.next(true);
  }

  userLogin(username: string, password: string): void {    
    this.loggedIn$.next(true);
    return;
  }

  logout(): void {
    this.loggedIn$.next(false);
    this.currentStudent$.next({} as IStudent);
    document.exitFullscreen();
  }
}
