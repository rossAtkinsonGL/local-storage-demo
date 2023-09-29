import { Injectable } from '@angular/core';
import { IQuestionResponse } from '../interfaces/questionResponse';
import ls from 'localstorage-slim';
import { IResponse } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class StoreResponseService { 
  constructor() { }

  storeResponse(responseID: string, mockResponseData: IResponse): void {    
    ls.set(responseID, mockResponseData, { encrypt: true });
  }
}
