import { BaseEntity } from "./BaseEntity";

export class PlanAction extends BaseEntity{
 descricao!: string;
  responsaveis: {nome:string,id:number}[] = [];
  dataInicioPrevista!: string;
  dataFimPrevista!: string;
  dataInicioRealizada!: string;
  dataFimRealizada!: string;
  status!: string;
  idProblema: number | string | undefined;

  constructor(){
   super();
  }

}
