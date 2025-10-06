
import { DateUtils } from "../utils/date-util";

export class AgendaEvento{
  id!:number
  titulo!:string
  assunto!:string
  isPresencial!:boolean
  local!:string
  participantes:{id:number,nome:string}[]=[]
  descricao!:string
  data!:Date
  hora!:string | number
  semana!:number
  diaSemana!:string | number
  diaMes!:string | number
  mes!:string | number
  ano!:string | number;

  constructor(){

  }

  map(dados:Partial<AgendaEvento>):AgendaEvento{
    Object.keys(dados).forEach((key)=>{

      const k = key as keyof AgendaEvento;

      if(dados[k] !== undefined){
        (this[k] as any) = dados[k];
      }

      if(key == "data"){
        const date = new Date((dados[k] as any))
        this.hora = date.getHours();
        this.semana  = DateUtils.getWeekNumber(date);
        this.mes = date.getMonth();
        this.diaMes = date.getDate();
        this.diaSemana = date.getDay()
        this.ano = date.getFullYear();
      }



    })

    return this;

  }



}

