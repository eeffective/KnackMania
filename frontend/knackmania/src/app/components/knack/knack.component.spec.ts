import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnackComponent } from './knack.component';

describe('KnackComponent', () => {
  let component: KnackComponent;
  let fixture: ComponentFixture<KnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
