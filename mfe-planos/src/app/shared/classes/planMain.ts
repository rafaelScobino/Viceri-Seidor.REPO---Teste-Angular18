import { BaseEntity } from "./BaseEntity";
import { PlanAction } from "./planAction";
import { PlanProblem } from "./planProblem";

export class PlanMain extends BaseEntity {
  titulo!: string;
  descricao!: string;
  dataInicio!: string;
  dataFim!: string;
  status!: string;
  objetivos: PlanObjective[] = [];

  constructor(){
   super()
  }


override map<T>(data?: Partial<T>): this {
  super.map(data);

  const dados = data as Partial<PlanMain>;

  if (dados.objetivos) {
    this.objetivos = [];
    dados.objetivos.forEach(obj => {
      this.mapObjective(obj)
    });

    if(this.objetivos){
    if(this.objetivos.some(o=>o.problemas.length>0)){

      let acoesList:PlanAction[] = [];

    this.objetivos.forEach(o => {
      if (o.problemas) {
        o.problemas.forEach(p => {
          if (p.acoes && p.acoes.length > 0) {
            p.acoes.forEach(a => acoesList.push(a));
          }
        });
      }
    });

      if(acoesList.length >0) {
         if(acoesList.every(a=> a.status ==="Concluído")){
        this.status = "Concluído"
      }  else{
        this.status = "Em andamento"
      }

      }


      }
    }



  }

  return this;
}
  mapObjective(dados:Partial<PlanObjective>) {
    const objective = new PlanObjective().map(dados);
    objective.id = this.objetivos.length
    this.objetivos.push(objective) ;
  }
}




export class PlanObjective extends BaseEntity {
  descricao!: string;
  problemas: PlanProblem[] =[];

  constructor() {
    super()
  }

  override map<T>(data?: Partial<T>): this {
  super.map(data);

  const dados = data as Partial<PlanObjective>;

  if (dados.problemas) {
    this.problemas = [];
    dados.problemas.forEach(problema => {
      this.mapProblem(problema)
    });
  }

  return this;
}

    mapProblem(dados:Partial<PlanProblem>) {
    const problem = new PlanProblem().map(dados);
     problem.id = this.problemas.length
    this.problemas.push(problem) ;
  }
}
