import { Component, Input, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { NgClass } from "../../../../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-dashboard-chart',
  standalone: true,
  imports: [CardModule, ButtonModule, ChartModule, NgClass],
  templateUrl: './dashboard-chart.component.html',
  styleUrl: './dashboard-chart.component.scss'
})
export class DashboardChartComponent {

/**
 * Define titulo do gráfico
 @param title
 */
  @Input() title:string = '';

/**
 * Define subtitulo do gráfico
 @param subtitle
 */
  @Input() subtitle:string = '';

  /**
 * Define o tipo de gráfico;
 * Opções:"line" | "bar" | "scatter" | "bubble" | "pie" | "doughnut" | "polarArea" | "radar"
 @param chartType
 */
@Input() chartType:"line" | "bar" | "scatter" | "bubble" | "pie" | "doughnut" | "polarArea" | "radar" = "pie";

/**
 * Define o paragrafo de informação do gráfico
 @param chartInfo
 */
  @Input() chartInfo:string = '';


  /**
 * Define o tipo de informação do gráfico
 @param tipoData
 */
  @Input() tipoData: string ='';

    /**
 * Define o total de informações do gráfico
 @param totalData
 */
  @Input() totalData: number = 0;



  /**
 * Define as informações do grafico
 @param data
 */
  @Input() data:string = 'Exportar';



 /**
 * Define as configurações do gráfico
 @param options
 */
  @Input() options:string = 'Exportar';











}
