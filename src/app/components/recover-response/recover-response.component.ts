import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IResponse } from 'src/app/interfaces/response';
import { RecoverResponseService } from 'src/app/services/recover-response.service';

@Component({
  selector: 'app-recover-response',
  templateUrl: './recover-response.component.html',
  styleUrls: ['./recover-response.component.css']
})
export class RecoverResponseComponent implements OnInit, OnDestroy {
  private destroyed = new Subject<void>();
  responses: Map<string, IResponse> = new Map<string, IResponse>();

  constructor(private recoverResponseService: RecoverResponseService, private router: Router) {}
  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  ngOnInit(): void {
    this.recoverResponseService.allResponses$.pipe(
      takeUntil(this.destroyed)
    )
    .subscribe(responses => {
      this.responses = responses;
    });
    this.recoverResponseService.getAllResponses();
  }

  viewResponse(responseKey: string) {
    this.router.navigate(['/ResponseDetail', responseKey]);
  }

  clearResponse(responseKey: string) {
    this.recoverResponseService.clearResponse(responseKey);
  }

  clearAll() {
    this.recoverResponseService.clearAll();
  }
}
