import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IQuestionResponse } from 'src/app/interfaces/questionResponse';
import { LoginService } from 'src/app/services/login.service';
import { StoreResponseService } from 'src/app/services/store-response.service';

@Component({
  selector: 'app-store-response',
  templateUrl: './store-response.component.html',
  styleUrls: ['./store-response.component.css']
})
export class StoreResponseComponent implements OnInit, OnDestroy {
  responseKey: string = '';
  forename: string = '';
  surname: string = '';
  mockResponseData: IQuestionResponse[] = [
    {
      questionID: 'q1',
      response: true
    },
    {
      questionID: 'q2',
      response: false
    },
    {
      questionID: 'q3',
      response: true
    },
    {
      questionID: 'q4',
      response: true
    },
    {
      questionID: 'q5',
      response: false
    }
  ];
  
  private destroyed = new Subject<void>();
  private userTestID: string = '';
  
  constructor(private loginService: LoginService, private storeResponseService: StoreResponseService) {}

  ngOnInit(): void {
    this.loginService.currentStudent$.pipe(
      takeUntil(this.destroyed)
    ).subscribe(x => {
      this.userTestID = x.userTestID;
      this.forename = x.forename;
      this.surname = x.surname;
      this.responseKey = x.responseKey;
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  storeResponse(): void {
    this.storeResponseService.storeResponse(this.responseKey, { userTestID: this.userTestID, forename: this.forename, surname: this.surname, response: this.mockResponseData });
    window.alert('Response saved');
  }
}
