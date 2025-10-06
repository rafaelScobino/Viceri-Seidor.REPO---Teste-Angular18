import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [MenubarModule,CommonModule,RouterLink],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {

  navItems: MenuItem[] = [
            {
                label: 'Home',
                icon: 'pi pi-link',
                command: (Router) => {
                    this.router.navigate(['/home']);
                }
            },
            {
                label: 'Pessoas',
                icon: 'pi pi-link',
                command: () => {
                    this.router.navigate(['/pessoas']);
                }
            },
           {
                label: 'Agenda',
                icon: 'pi pi-link',
                command: () => {
                    this.router.navigate(['/agenda']);
                }
            },
            {
                label: 'Plano de Ação',
                icon: 'pi pi-link',
                command: () => {
                    this.router.navigate(['/planos']);
                }
            },
        ];


constructor(private router: Router) {}


}
