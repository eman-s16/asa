import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPDATERestaurantComponent } from './update-restaurant.component';

describe('UPDATERestaurantComponent', () => {
  let component: UPDATERestaurantComponent;
  let fixture: ComponentFixture<UPDATERestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UPDATERestaurantComponent]
    });
    fixture = TestBed.createComponent(UPDATERestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
