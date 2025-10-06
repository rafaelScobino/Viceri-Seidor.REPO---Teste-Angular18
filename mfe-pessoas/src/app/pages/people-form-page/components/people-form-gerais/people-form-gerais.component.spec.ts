import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleFormGeraisComponent } from './people-form-gerais.component';

describe('PeopleFormGeraisComponent', () => {
  let component: PeopleFormGeraisComponent;
  let fixture: ComponentFixture<PeopleFormGeraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleFormGeraisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleFormGeraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
