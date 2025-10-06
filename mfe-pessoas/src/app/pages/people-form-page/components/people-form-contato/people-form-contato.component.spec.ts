import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleFormContatoComponent } from './people-form-contato.component';

describe('PeopleFormContatoComponent', () => {
  let component: PeopleFormContatoComponent;
  let fixture: ComponentFixture<PeopleFormContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleFormContatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleFormContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
