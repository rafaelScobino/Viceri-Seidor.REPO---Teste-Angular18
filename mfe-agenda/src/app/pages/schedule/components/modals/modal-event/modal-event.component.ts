import { AgendaEvento } from './../../../../../shared/classes/agenda-evento';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { EventFormComponent } from '../../event-form/event-form.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-event',
  standalone: true,
  imports: [EventFormComponent,DialogModule,ButtonModule,CommonModule],
  templateUrl: './modal-event.component.html',
  styleUrl: './modal-event.component.scss'
})
export class ModalEventComponent {
@ViewChild('formEvent') formEvent!: EventFormComponent;
@Output() setEvento: EventEmitter<AgendaEvento> = new EventEmitter()
   visible: boolean = false;


   constructor(){}

    open() {
        this.visible = true;
    }


    submitForm(){
      this.formEvent.markDirty()
      if(this.formEvent.isInvalid())return
      const evento:AgendaEvento = this.formEvent.submit();
      this.setEvento.emit(evento);
      this.formEvent.reset()
    this.visible = false
    }


}
