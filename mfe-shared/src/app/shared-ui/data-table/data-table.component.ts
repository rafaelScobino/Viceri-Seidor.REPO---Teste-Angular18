import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TieredMenu } from 'primeng/tieredmenu';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, TieredMenu],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent {
  @Input() tableCaption: string | undefined;
@Input() tableCols: { field: string; header: string }[] = []
@Input() tableData:any[] = []
  @Input() hasBtns: boolean = true;
  @Input() listBtns: MenuItem[] = [
    {
      label:'Editar',
      icon: 'pi pi-pencil',
      command: () => {},
    },
    {
      label:'Detalhe',
      icon: 'pi pi-search',
      command: () => {},
    },
  ];

  products = [
    { id: 1, name: 'Product 1', price: 336.76, category: 'Home', stock: 30 },
    { id: 2, name: 'Product 2', price: 353.22, category: 'Clothing', stock: 4 },
    { id: 3, name: 'Product 3', price: 109.64, category: 'Toys', stock: 61 },
    { id: 4, name: 'Product 4', price: 296.26, category: 'Books', stock: 39 },
    {
      id: 5,
      name: 'Product 5',
      price: 94.75,
      category: 'Electronics',
      stock: 21,
    },
    {
      id: 6,
      name: 'Product 6',
      price: 215.33,
      category: 'Clothing',
      stock: 50,
    },
    { id: 7, name: 'Product 7', price: 442.1, category: 'Toys', stock: 12 },
    { id: 8, name: 'Product 8', price: 178.99, category: 'Home', stock: 73 },
    { id: 9, name: 'Product 9', price: 67.4, category: 'Books', stock: 7 },
    {
      id: 10,
      name: 'Product 10',
      price: 405.55,
      category: 'Electronics',
      stock: 88,
    },
  ];
  productColumns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'price', header: 'Price' },
    { field: 'category', header: 'Category' },
    { field: 'stock', header: 'Stock' },
  ];
}
