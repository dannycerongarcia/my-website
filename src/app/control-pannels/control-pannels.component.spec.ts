import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPannelsComponent } from './control-pannels.component';

describe('ControlPannelsComponent', () => {
  let component: ControlPannelsComponent;
  let fixture: ComponentFixture<ControlPannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPannelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
