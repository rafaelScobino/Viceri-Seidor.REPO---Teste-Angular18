import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleFormEnderecoComponent } from './people-form-endereco.component';

describe('PeopleFormEnderecoComponent', () => {
  let component: PeopleFormEnderecoComponent;
  let fixture: ComponentFixture<PeopleFormEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleFormEnderecoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleFormEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
