import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GellaryComponent } from './gellary.component';

describe('GellaryComponent', () => {
  let component: GellaryComponent;
  let fixture: ComponentFixture<GellaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GellaryComponent]
    });
    fixture = TestBed.createComponent(GellaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
