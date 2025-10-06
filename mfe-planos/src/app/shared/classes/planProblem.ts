import { BaseEntity } from "./BaseEntity";
import { PlanAction } from "./planAction";

export class PlanProblem extends BaseEntity{
 descricao!: string;
 resultado!: string;
  etapa!: string
  hasCausa!: string;
  hasPrioridade!: string
  categoria!: string;
  acoes: PlanAction[] = [];

  constructor(){
   super();
  }

override map<T>(data?: Partial<T>): this {
  super.map(data);

  const dados = data as Partial<PlanProblem>;

  if (dados.acoes) {
    this.acoes = [];
    dados.acoes.forEach(acao => {
      this.mapAction(acao)
    });
  }

  return this;
}
  mapAction(dados:Partial<PlanAction>){
 const action = new PlanAction().map(dados);
 action.id = this.acoes.length
    this.acoes.push(action) ;
  }

}
