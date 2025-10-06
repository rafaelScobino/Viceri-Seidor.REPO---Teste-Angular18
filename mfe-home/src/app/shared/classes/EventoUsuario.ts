export class EventoUsuario {
  titulo!: string;
  assunto!: string;
  isPresencial!: boolean;
  participantes: { id: number; name: string }[] = [];
  participantesList:string = ''
  descricao!: string;
  data!: Date;
  constructor() {}

  map(dados: Partial<EventoUsuario>): EventoUsuario {

    Object.keys(dados).forEach((key) => {
      const k = key as keyof EventoUsuario;

      if (dados[k] !== undefined && dados[k] !== null) {
        (this[k] as any) = dados[k];
      }
    });

    this.setParticipantesList()


    return this;
  }

 setParticipantesList(){
  if(this.participantes.length == 1) return this.participantesList = this.participantes[0].name

  const nameList = this.participantes?.map(p => p.name);

  if (nameList.length <= 2) {
    return this.participantesList = nameList.join(', ');
  }

  return this.participantesList = `${nameList.slice(0, 2).join(', ')}...`;
}

  get dataFormat() {
    let data = new Date(this.data).toLocaleDateString('pt-BR');
    return data
  }
}
