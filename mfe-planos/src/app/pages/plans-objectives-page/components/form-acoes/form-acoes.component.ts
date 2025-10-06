import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { combineLatest, startWith, Subscribable, Subscription } from 'rxjs';
import { PlanAction } from '../../../../shared/classes/planAction';


@Component({
  selector: 'app-form-acoes',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,TextareaModule,CheckboxModule,DatePickerModule,MultiSelectModule,FloatLabelModule,CommonModule],
  templateUrl: './form-acoes.component.html',
  styleUrl: './form-acoes.component.scss'
})
export class FormAcoesComponent implements OnInit,OnDestroy {


today:Date = new Date();
formattedToday:string = this.today.toLocaleDateString('pt-BR')
formAction!: FormGroup;

statusSub: Subscription | undefined;

//VALORES PADRAO
defaultValues = {
  descricao: '',
  responsaveis: [],
  dataInicioPrevista: this.today, // manter valor inicial
  dataFimPrevista: '',
  dataInicioRealizada: this.today, // manter valor inicial
  dataFimRealizada: '',
  status: 'Pendente',
  idProblema: { value: '', disabled: true }
}


//MOCK
responsaveisOptions = [
  { nome: 'João Silva', id: 0 },
  { nome: 'Maria Souza', id: 1 },
  { nome: 'Carlos Lima', id: 2 }
];


  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
this.createForm()
  }


  createForm(){
    this.formAction = this.fb.group({
  descricao: [''],
  responsaveis: [[]],
  dataInicioPrevista: [this.formattedToday],
  dataFimPrevista: [''],
  dataInicioRealizada: [this.formattedToday],
  dataFimRealizada: [''],
  status: [{ value: '' }],
   idProblema: [{ value: '', disabled: true }]
});

this.setupStatusSub()

  }

  set idProblema(value: any){
      this.formAction.get('idProblema')?.setValue(value);
  }

  setupStatusSub(){
    this.statusSub = combineLatest([
      this.formAction.get('dataInicioRealizada')?.valueChanges.pipe(
        startWith(this.formAction.get('dataInicioRealizada')?.value)
      ),
      this.formAction.get('dataFimRealizada')?.valueChanges.pipe(
        startWith(this.formAction.get('dataFimRealizada')?.value)
      )
    ]).subscribe((obsArr:Array<any>) =>{

      let status = 'Pendente';
      if (obsArr[0] > this.today) {
        status = 'Não iniciado';
      } else if (obsArr[1]!! && obsArr[1] <= this.today) {
        status = 'Concluído';
      } else if (obsArr[1] > this.today) {
        status = 'Em andamento';
      }

      this.formAction.get('status')?.setValue(status, { emitEvent: false });
    })
  }

  submit(){


      const raw = this.formAction.getRawValue();

  const formValue = {
    ...raw,
    dataInicioPrevista: this.formatDateToPtBR(raw.dataInicioPrevista),
    dataFimPrevista: this.formatDateToPtBR(raw.dataFimPrevista),
    dataInicioRealizada: this.formatDateToPtBR(raw.dataInicioRealizada),
    dataFimRealizada: this.formatDateToPtBR(raw.dataFimRealizada),
  };
    return new PlanAction().map(formValue)

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




  get status(){
    return this.formAction.get('status')?.value;
  }

   ngOnDestroy(): void {
   this.statusSub?.unsubscribe()
  }


}
