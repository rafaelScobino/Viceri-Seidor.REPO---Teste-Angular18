import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PlanMain } from '../../../../shared/classes/planMain';
import { DatePickerModule } from 'primeng/datepicker';
@Component({
  selector: 'app-form-gerais',
  standalone: true,
  imports: [
    ButtonModule,
    FloatLabelModule,
    CommonModule,
    DatePickerModule,
    ReactiveFormsModule,
    InputTextModule,
  ],
  templateUrl: './form-gerais.component.html',
  styleUrl: './form-gerais.component.scss',
})
export class FormGeraisComponent {
  formGerais!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formGerais = this.fb.group({
      titulo: [''],
      descricao: [''],
      dataInicio:[''],
      dataFim:[''],
      objetivos: this.fb.array([]),
    });
  }

  get objetivos(): FormArray {
    return this.formGerais.get('objetivos') as FormArray;
  }

  addObjetivo(): void {
    this.objetivos.push(this.fb.control(''));
  }

  updateForm(data: Partial<PlanMain>) {
    Object.keys(this.formGerais.controls).forEach((key) => {
      if (data[key as keyof PlanMain]) {

        if (key == 'objetivos') {
          const objetivosArray = this.formGerais.get('objetivos') as FormArray;
          objetivosArray.clear();

          const valores = data.objetivos;
          if (valores && Array.isArray(valores)) {
            valores.forEach((valor) => {
              objetivosArray.push(this.fb.control(valor.descricao));
            });
          }
          return
        }

        this.formGerais.get(key)?.setValue(data[key as keyof PlanMain]);
      }
    });
  }

  submit() {
    if (this.formGerais.valid) {
const raw = this.formGerais.getRawValue();
  const formValue = {
    ...raw,
    dataInicio: this.formatDateToPtBR(raw.dataInicio),
    dataFim: this.formatDateToPtBR(raw.dataFim),
  };

      return formValue;
    } else {
      console.warn('FormGerais inválido');
    }
  }

formatDateToPtBR(value: any): string {
  if (!value) return '';

  if (value instanceof Date) {
    return value.toLocaleDateString('pt-BR');
  }

  if (typeof value === 'string') {
    const data = new Date(value);
      return data.toLocaleDateString('pt-BR');
    }
    return value;
}




}
