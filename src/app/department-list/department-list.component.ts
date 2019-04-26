import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,paramMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul>
      <li (click)="onSelect(d)" [class.selected]="isS(d)" *ngFor="let d of departments">
      <span>{{d.id}} - {{d.name}}</span>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  departments = [
  {"id" : 1, "name" : "a"},
  {"id" : 2, "name" : "b"},
  {"id" : 3, "name" : "c"}
  ]

  public si;

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
  this.route.paramMap.subscribe((params:paramMap) => {
  let id = parseInt(params.get('id'));
  this.si = id;
  });
  }

  onSelect(d){
    this.router.navigate(['/department', d.id]);
  }

  isS(d){
  return d.id === this.si;
  }

}
