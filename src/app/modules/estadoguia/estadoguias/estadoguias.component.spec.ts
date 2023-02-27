import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoguiasComponent } from './estadoguias.component';

describe('EstadoguiasComponent', () => {
  let component: EstadoguiasComponent;
  let fixture: ComponentFixture<EstadoguiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoguiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoguiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
