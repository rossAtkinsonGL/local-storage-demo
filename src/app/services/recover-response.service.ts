import { Injectable } from '@angular/core';
import ls from 'localstorage-slim';
import { IResponse } from '../interfaces/response';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecoverResponseService {   
  viewingResponseDetails$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);  
  allResponses$: BehaviorSubject<Map<string, IResponse>> = new BehaviorSubject(new Map<string, IResponse>);

  constructor() { }

  checkResponseExists(userTestID: string): string {
    const existingResponseIDs: number[] = Object.keys(localStorage)
      .filter(key => key.includes('testResponse'))
      .map(key => {
        return Number.parseInt(key.split('-')[1]);
      })
      .sort((a: number, b: number) => b - a);

    if (!existingResponseIDs.length) {
      return 'testResponse-0';
    }

    let responseKey: string = 'testResponse-' + (existingResponseIDs[0] + 1).toString();

    Object.keys(localStorage).filter(key => key.includes('testResponse')).forEach(key => {
      const response: IResponse | null = ls.get(key, { decrypt: true });
      if (!response)
        return;
      if (response.userTestID == userTestID) {
        responseKey = key;
      }
    });

    return responseKey;
  }

  getAllResponses(): void {
    const storageKeys: string[] = Object.keys(localStorage);
    if (!storageKeys) {
      this.allResponses$.next(new Map<string, IResponse>());
    }

    let responses: Map<string, IResponse> = new Map<string, IResponse>();
    storageKeys.filter(key => key.includes('testResponse')).forEach(key => {
      const response: IResponse | null = ls.get(key, { decrypt: true });
      if (!response)
        return;

      responses.set(key, response);
    });
    this.allResponses$.next(responses);
  }

  getResponse(responseKey: string): Observable<IResponse> {
    this.viewingResponseDetails$.next(true);
    const response: IResponse | null = ls.get(responseKey, { decrypt: true });
    if (!response)
      return of({} as IResponse);

    return of(response);
  }

  clearResponse(responseKey: string) {
    ls.remove(responseKey);
    this.getAllResponses();
  }

  clearAll(): void {
    Object.keys(localStorage).filter(key => key.includes('testResponse')).forEach(key => {
      const response: IResponse | null = ls.get(key, { decrypt: true });
      if (!response)
        return;

      ls.remove(key);
    });
    this.getAllResponses();
  }
}
