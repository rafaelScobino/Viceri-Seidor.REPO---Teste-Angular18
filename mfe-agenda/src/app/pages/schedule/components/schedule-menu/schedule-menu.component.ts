import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-schedule-menu',
  standalone: true,
  imports: [DatePicker,CommonModule,FormsModule],
  templateUrl: './schedule-menu.component.html',
  styleUrl: './schedule-menu.component.scss'
})
export class ScheduleMenuComponent implements OnChanges {

  rangeDates:Date [] = []
  @Input() rangeSelector:(number | null)[] = [];
  @Input() month:Date = new Date();
@Input() todayEvents:string[] = [];

@Input() tomorrowEvents:string[] = [];


ngOnChanges(changes: SimpleChanges): void {
    if (changes['rangeSelector'] || changes['month']) {
        this.setRange();
    }
}




setRange(){
  this.rangeDates = [];
  this.rangeSelector.forEach((d)=>{

    if(!d) return

    const month = this.month.getMonth();
const year = this.month.getFullYear();
    this.rangeDates.push(new Date(year,month,d))

  })

}


}
