import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FelxBoxComponent } from './felx-box.component';

describe('FelxBoxComponent', () => {
  let component: FelxBoxComponent;
  let fixture: ComponentFixture<FelxBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FelxBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FelxBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
