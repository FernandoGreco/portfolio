import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbovespaComponent } from './ibovespa.component';

describe('IbovespaComponent', () => {
  let component: IbovespaComponent;
  let fixture: ComponentFixture<IbovespaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbovespaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbovespaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
