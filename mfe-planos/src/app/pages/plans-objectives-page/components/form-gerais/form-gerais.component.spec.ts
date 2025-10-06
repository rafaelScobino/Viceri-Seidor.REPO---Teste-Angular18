import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeraisComponent } from './form-gerais.component';

describe('FormGeraisComponent', () => {
  let component: FormGeraisComponent;
  let fixture: ComponentFixture<FormGeraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGeraisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGeraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
