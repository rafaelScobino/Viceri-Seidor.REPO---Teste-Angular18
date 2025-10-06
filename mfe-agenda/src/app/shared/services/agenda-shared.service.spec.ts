import { TestBed } from '@angular/core/testing';
import { AgendaSharedService } from './agenda-shared.service';
import { AgendaEvento } from '../classes/agenda-evento';



describe('AgendaSharedServiceService', () => {
  let service: AgendaSharedService;

beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save agenda list to localStorage when setState is called', () => {

    spyOn(localStorage, 'setItem').and.callThrough();

const evento = new AgendaEvento();
evento.id = 0;
evento.titulo = 'Reunião';
evento.assunto = 'Planejamento';
evento.isPresencial = true;
evento.participantes = [{ id: 1, nome: 'João' }];
evento.descricao = 'Reunião de alinhamento';
evento.data = new Date();
evento.local = '';
evento.hora = 0;
evento.semana = 0;
evento.diaSemana = 0;
evento.diaMes = 0;
evento.mes = 0;
evento.ano = 0;

    service.setState(evento);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'agendaList',
      jasmine.any(String)
    );

    const stored = localStorage.getItem('agendaList');
    expect(stored).not.toBeNull();

    const parsed = JSON.parse(stored!);
    expect(Array.isArray(parsed)).toBeTrue();
    expect(parsed.length).toBe(1);
    expect(parsed[0].titulo).toBe('Reunião');
    expect(parsed[0].assunto).toBe('Planejamento');
  });


});
