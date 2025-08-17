import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstoreComponent } from './newstore.component';

describe('NewstoreComponent', () => {
  let component: NewstoreComponent;
  let fixture: ComponentFixture<NewstoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewstoreComponent]
    });
    fixture = TestBed.createComponent(NewstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
