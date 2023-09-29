import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverResponseComponent } from './recover-response.component';

describe('RecoverResponseComponent', () => {
  let component: RecoverResponseComponent;
  let fixture: ComponentFixture<RecoverResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
