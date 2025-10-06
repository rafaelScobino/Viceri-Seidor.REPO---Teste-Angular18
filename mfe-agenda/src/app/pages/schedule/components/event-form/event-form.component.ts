import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from 'primeng/datepicker';
import { AgendaEvento } from '../../../../shared/classes/agenda-evento';
import { RadioButton } from "primeng/radiobutton";


@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, TextareaModule, CheckboxModule, DatePickerModule, MultiSelectModule, FloatLabelModule, CommonModule, RadioButton],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss'
})
export class EventFormComponent implements OnInit {
  formEvent!: FormGroup;
  participantesOptions = [
    { name: 'João Silva', id: 0 },
    { name: 'Maria Souza', id: 0 },
    { name: 'Carlos Lima', id: 0 }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formEvent = this.fb.group({
      titulo: ['',[Validators.required]],
      assunto: [''],
      isPresencial: [false],
      local: [''],
      participantes: [[]],
      descricao: [''],
      data: ['',[Validators.required]]
    });
  }


  submit(){
    const raw = this.formEvent.getRawValue();

    let formValue =
    {
      ...raw,
      data: new Date(raw.data)
    }

    const evento:AgendaEvento = new AgendaEvento().map(formValue);

    return evento;



  }

  reset(){
    this.formEvent.reset();
  }

  isInvalid(){
    return this.formEvent.invalid
  }

  markDirty(){
  Object.values(this.formEvent.controls).forEach(control => {
  control.markAsTouched();
  control.markAsDirty();
  control.updateValueAndValidity();
});

  }
}
