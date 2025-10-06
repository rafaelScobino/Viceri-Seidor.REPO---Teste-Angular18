import { DashboardChartComponent } from './../dashboard-chart/dashboard-chart.component';
import { ButtonModule } from 'primeng/button';
import { ChangeDetectorRef, Component, effect, inject, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { CommonModule, isPlatformBrowser, NgFor } from '@angular/common';
@Component({
  selector: 'app-home-summary',
  standalone: true,
  imports: [CommonModule, DashboardChartComponent],
  templateUrl: './home-summary.component.html',
  styleUrl: './home-summary.component.scss',
})
export class HomeSummaryComponent {
configPlanoStatus: any;
configUsuariosEscola: any;
  @Input()dataPlanosStatus: number[] = [];
 @Input() dataUsuariosEscola: number[] = [];
userTotal: number = 0
planTotal: number = 0
  options: any;

  ngOnInit() {
    this.initChart();
    this.calculateTotals()
  }



  calculateTotals(): void {
    this.planTotal = this.dataPlanosStatus.reduce((acc, val) => acc + val, 0);
    this.userTotal = this.dataUsuariosEscola.reduce((acc, val) => acc + val, 0);
  }






  initChart() {
   const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
      },
    };

    this.initPlanosStatusChart(documentStyle);
    this.initUsuariosEscolaChart(documentStyle);
}

private initPlanosStatusChart(documentStyle: CSSStyleDeclaration) {
    this.configPlanoStatus = {
      labels: ['Concluído', 'Em andamento'],
      datasets: [
        {
          data: this.dataPlanosStatus, // valores mockados
          backgroundColor: [
            documentStyle.getPropertyValue('--p-green-500'),
            documentStyle.getPropertyValue('--p-red-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--p-green-400'),
            documentStyle.getPropertyValue('--p-red-400'),
          ],
        },
      ],
    };
  }

  private initUsuariosEscolaChart(documentStyle: CSSStyleDeclaration) {
    this.configUsuariosEscola = {
      labels: ['Escola A', 'Escola B', 'Escola C'],
      datasets: [
        {
          data: this.dataUsuariosEscola, // valores mockados
          backgroundColor: [
            documentStyle.getPropertyValue('--p-blue-500'),
            documentStyle.getPropertyValue('--p-orange-500'),
            documentStyle.getPropertyValue('--p-purple-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--p-blue-400'),
            documentStyle.getPropertyValue('--p-orange-400'),
            documentStyle.getPropertyValue('--p-purple-400'),
          ],
        },
      ],
    };
  }




}
