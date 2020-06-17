import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnackListComponent } from './knack-list.component';

describe('KnackListComponent', () => {
  let component: KnackListComponent;
  let fixture: ComponentFixture<KnackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
