import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IResponse } from 'src/app/interfaces/response';
import { RecoverResponseService } from 'src/app/services/recover-response.service';

@Component({
  selector: 'app-response-detail',
  templateUrl: './response-detail.component.html',
  styleUrls: ['./response-detail.component.css']
})
export class ResponseDetailComponent implements OnInit {

  response: IResponse = {} as IResponse;

  constructor(private route: ActivatedRoute, private recoverResponseService: RecoverResponseService) {
    const responseKey = this.getResponseKey();
    if (!responseKey) 
      return;
    this.recoverResponseService.getResponse(responseKey).subscribe(x => {
      this.response = x;
    });
  }
  
  ngOnInit(): void {
  }

  getResponseKey(): string {
    const key = this.route.snapshot.paramMap.get('responsekey');    
    return key ? key : '';
  }
}
