import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnackDetailsComponent } from './knack-details.component';

describe('KnackDetailsComponent', () => {
  let component: KnackDetailsComponent;
  let fixture: ComponentFixture<KnackDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnackDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
