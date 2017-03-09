import { Component, Input, OnInit } from '@angular/core';

import { ExampleService } from './services/example.service';

@Component({
  moduleId: module.id,
  selector: 'basic',
  templateUrl: 'basic.component.html',
  styleUrls: [
    './styles/basic.styles.css'
  ]
})
export class BasicComponent implements OnInit {
  public bullets:string[];
  public pipeData:any;

  constructor(public exampleService:ExampleService) {
  }

  ngOnInit() {
    this.bullets = this.exampleService.getBullets();
    this.pipeData = this.exampleService.getPipeData();
  }
}
