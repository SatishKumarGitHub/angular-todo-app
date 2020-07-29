import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFundamentalComponent } from './ui-fundamental.component';

describe('UiFundamentalComponent', () => {
  let component: UiFundamentalComponent;
  let fixture: ComponentFixture<UiFundamentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiFundamentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFundamentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
