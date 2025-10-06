import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeTableListComponent } from './tree-table-list.component';

describe('ListProblemsActionsComponent', () => {
  let component: TreeTableListComponent;
  let fixture: ComponentFixture<TreeTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeTableListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
