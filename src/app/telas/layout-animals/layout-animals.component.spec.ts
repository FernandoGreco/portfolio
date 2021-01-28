import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAnimalsComponent } from './layout-animals.component';

describe('LayoutAnimalsComponent', () => {
  let component: LayoutAnimalsComponent;
  let fixture: ComponentFixture<LayoutAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
