import { expand } from 'rxjs';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TreeNode } from 'primeng/api';
import { TableModule } from "primeng/table";
@Component({
  selector: 'app-tree-table-list',
  standalone: true,
  imports: [
    TreeTableModule,
    CommonModule,
    ButtonModule,
    TableModule
],
  templateUrl: './tree-table-list.component.html',
  styleUrl: './tree-table-list.component.scss'
})
export class TreeTableListComponent {
@Output() openModalAction = new EventEmitter<TreeNode>();
@Input () showButton: boolean = false ;
@Input ()cols!: Column[];
@Input () tableFiles: TreeNode[] =[];
@Input()showGrid:boolean = true;
tableData: any;


 _openModalAction(rowNode:TreeNode){
  let modalEmit:TreeNode = rowNode
   this.openModalAction.emit(modalEmit);
  }



}

export interface Column {
    field: string;
    header: string;
}
