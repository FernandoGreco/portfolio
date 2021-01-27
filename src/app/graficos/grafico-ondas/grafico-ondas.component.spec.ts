import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoOndasComponent } from './grafico-ondas.component';

describe('GraficoOndasComponent', () => {
  let component: GraficoOndasComponent;
  let fixture: ComponentFixture<GraficoOndasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoOndasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoOndasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
