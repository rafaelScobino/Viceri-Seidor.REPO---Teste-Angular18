import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Person } from '../../../../shared/classes/person';
@Component({
  selector: 'app-people-card',
  standalone: true,
  imports: [CardModule,ButtonModule],
  templateUrl: './people-card.component.html',
  styleUrl: './people-card.component.scss'
})
export class PeopleCardComponent {
person:Person = new Person()
avatarUrl:string | undefined;


constructor(){}

}
