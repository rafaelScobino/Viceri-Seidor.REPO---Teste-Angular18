import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAcoesComponent } from './form-acoes.component';

describe('FormAcoesComponent', () => {
  let component: FormAcoesComponent;
  let fixture: ComponentFixture<FormAcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAcoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
