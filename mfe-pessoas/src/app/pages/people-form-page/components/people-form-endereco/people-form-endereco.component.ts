import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { Person } from '../../../../shared/classes/person';

@Component({
  selector: 'app-people-form-endereco',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,FloatLabel,CommonModule,SelectModule],
  templateUrl: './people-form-endereco.component.html',
  styleUrl: './people-form-endereco.component.scss'
})
export class PeopleFormEnderecoComponent {
  formEndereco!: FormGroup;

  constructor(private fb:FormBuilder,private msService: MessageService){}


  ngOnInit(): void {
  this.createForm();
  }

  createForm(){
  this.formEndereco = this.fb.group({
      endereco: ['', [Validators.required]],
      cidade: [''],
      cep: [''],
      estado: [''],
       pais: [''],
    });
  }

  submitForm() {
 this.markDirty()
    if(this.formEndereco.invalid) return

let partialPerson = this.formEndereco.getRawValue()

return partialPerson

}


  markDirty(){
  Object.values(this.formEndereco.controls).forEach(control => {
  control.markAsTouched();
  control.markAsDirty();
  control.updateValueAndValidity();
});

  }


}
