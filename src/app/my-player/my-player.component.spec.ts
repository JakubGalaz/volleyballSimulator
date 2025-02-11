import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlayerComponent } from './my-player.component';

describe('MyPlayerComponent', () => {
  let component: MyPlayerComponent;
  let fixture: ComponentFixture<MyPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
