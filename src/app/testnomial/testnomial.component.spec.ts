import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestnomialComponent } from './testnomial.component';

describe('TestnomialComponent', () => {
  let component: TestnomialComponent;
  let fixture: ComponentFixture<TestnomialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestnomialComponent]
    });
    fixture = TestBed.createComponent(TestnomialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
