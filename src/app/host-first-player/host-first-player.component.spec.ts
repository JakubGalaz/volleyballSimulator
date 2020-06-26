import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostFirstPlayerComponent } from './host-first-player.component';

describe('HostFirstPlayerComponent', () => {
  let component: HostFirstPlayerComponent;
  let fixture: ComponentFixture<HostFirstPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostFirstPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostFirstPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
