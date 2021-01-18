import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoCovidComponent } from './grafico-covid.component';

describe('GraficoCovidComponent', () => {
  let component: GraficoCovidComponent;
  let fixture: ComponentFixture<GraficoCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoCovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
