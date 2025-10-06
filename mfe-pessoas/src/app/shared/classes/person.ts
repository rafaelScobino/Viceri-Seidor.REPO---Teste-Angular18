import { IEscola } from "./escolas";

export class Person{
id!:number;
nome!:string;
nomeSocial!:string;
cpf!:string;
escola!:IEscola;
email!:string;
telefone!:string;
celular!:string;
endereco!:string
cidade!:string;
cerp!:string;
estado!:string;
pais!:string

constructor(){

}

map(dados:Partial<Person>){

    Object.keys(dados).forEach((key)=>{

      const k = key as keyof Person;

      if(dados[k] !== null && dados[k] !== undefined){
        (this[k] as any) = dados[k];
      }

    })


    return this;
}


getEnderecoFormatado(): string {
  if (!this) return '...';

  const partes: string[] = [];

  if (this.endereco) {
    partes.push(this.endereco);
  }

  if (this.cidade) {
    partes.push(this.cidade);
  }

  if (this.pais) {
    partes.push(this.pais);
  }

  return partes.length ? partes.join(' - ') : '...';
}

get escolaName(){
  return this.escola.nome
}


}

