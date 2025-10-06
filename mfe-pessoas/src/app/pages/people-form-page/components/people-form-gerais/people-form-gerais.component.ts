import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';
import { Escolas, IEscola } from '../../../../shared/classes/escolas';
import { ButtonModule } from "primeng/button";
import { InputMaskModule } from 'primeng/inputmask';
import { Person } from '../../../../shared/classes/person';
@Component({
  selector: 'app-people-form-gerais',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, FloatLabel, CommonModule, SelectModule, ButtonModule,InputMaskModule],
  templateUrl: './people-form-gerais.component.html',
  styleUrl: './people-form-gerais.component.scss'
})
export class PeopleFormGeraisComponent {
  @Output() valueEmit: EventEmitter<Partial<Person>> = new EventEmitter()
  formGerais!: FormGroup;

  constructor(private fb:FormBuilder,private msService: MessageService){}

  escolaOptions:IEscola[] = Escolas.escolaList

  ngOnInit(): void {
  this.createForm();
  }

  createForm(){
  this.formGerais = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(100)]],
      nomeSocial: [''],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      escola: [null, [Validators.required]],
    });
  }

  submitForm() {
 this.markDirty()
    if(this.formGerais.invalid) return

let partialPerson = this.formGerais.getRawValue()

this.valueEmit.emit(partialPerson)
this.msService.add({
      severity: 'success',
      summary: 'Sucesso!',
      detail: 'Informações adicionadas com sucesso!',
      key: 'person-cadastro-toast',
      life: 900,
    });


}


  markDirty(){
  Object.values(this.formGerais.controls).forEach(control => {
  control.markAsTouched();
  control.markAsDirty();
  control.updateValueAndValidity();
});

  }


}
