import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreResponseComponent } from './store-response.component';

describe('StoreResponseComponent', () => {
  let component: StoreResponseComponent;
  let fixture: ComponentFixture<StoreResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
