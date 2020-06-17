import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnackHomeComponent } from './knack-home.component';

describe('KnackHomeComponent', () => {
  let component: KnackHomeComponent;
  let fixture: ComponentFixture<KnackHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnackHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnackHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
