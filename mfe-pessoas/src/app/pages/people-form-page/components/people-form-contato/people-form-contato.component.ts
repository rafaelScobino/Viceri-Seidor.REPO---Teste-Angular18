import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { Person } from '../../../../shared/classes/person';
import { MessageService } from 'primeng/api';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from "primeng/button";

@Component({
  selector: 'app-people-form-contato',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, FloatLabel, CommonModule, SelectModule, InputMaskModule, ButtonModule],
  templateUrl: './people-form-contato.component.html',
  styleUrl: './people-form-contato.component.scss'
})
export class PeopleFormContatoComponent {
@Output() valueEmit: EventEmitter<Partial<Person>> = new EventEmitter()
  formContato!: FormGroup;

  constructor(private fb:FormBuilder,private msService: MessageService){}


  ngOnInit(): void {
  this.createForm();
  }

  createForm(){
  this.formContato = this.fb.group({
      email: ['', [Validators.required]],
      celular: [''],
      telefone: [''],
    });
  }

  submitForm() {
 this.markDirty()
    if(this.formContato.invalid) return

let partialPerson = this.formContato.getRawValue()

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
  Object.values(this.formContato.controls).forEach(control => {
  control.markAsTouched();
  control.markAsDirty();
  control.updateValueAndValidity();
});

  }




}
