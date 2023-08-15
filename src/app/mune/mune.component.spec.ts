import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuneComponent } from './mune.component';

describe('MuneComponent', () => {
  let component: MuneComponent;
  let fixture: ComponentFixture<MuneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuneComponent]
    });
    fixture = TestBed.createComponent(MuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
