import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApistestComponent } from './apistest.component';

describe('ApistestComponent', () => {
  let component: ApistestComponent;
  let fixture: ComponentFixture<ApistestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApistestComponent]
    });
    fixture = TestBed.createComponent(ApistestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
