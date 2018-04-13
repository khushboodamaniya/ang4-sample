import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTwowayDatabindingComponent } from './custom-twoway-databinding.component';

describe('CustomTwowayDatabindingComponent', () => {
  let component: CustomTwowayDatabindingComponent;
  let fixture: ComponentFixture<CustomTwowayDatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTwowayDatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTwowayDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
