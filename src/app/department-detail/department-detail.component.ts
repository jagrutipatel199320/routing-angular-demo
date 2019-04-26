import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, paramMap} from "@angular/router";
@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      {{di}}
      <a (click)="goPrevious()">Perious</a>
      <a (click)="goNext()">Next</a>
      <a (click)="back()">back</a>
    </p>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public di;
  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
 // let id = parseInt(this.route.snapshot.paramMap.get('id'));
  //this.di = id;
  this.route.paramMap.subscribe((params:paramMap) => {
  let id = parseInt(params.get('id'));
  this.di = id;
  })

  }
  goPrevious(){
  let pi = this.di - 1;
  this.router.navigate(['/department', pi]);
  }

  goNext(){
  let ni = this.di + 1;
  this.router.navigate(['/department', ni]);
  }

  back(){
  let si = this.di ? this.di : null;
  this.router.navigate(['/department'],{id:si})
  }

}
