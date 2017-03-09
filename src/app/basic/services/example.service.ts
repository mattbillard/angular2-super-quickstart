import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService {
  private bullets:any[] = [
    {text: 'quick to create'},
    {text: 'self-contained'},
    {text: 'no subviews/child views'},
    {text: 'this example has a service, component, styles'},
    {text: 'can easily grow into a more complex module later'},
    {text: 'can also be lazy loaded easily in the future'},
  ];

  private pipeData:any = {
    price: 0.987,
    currency: 1234.56,
    date: new Date(1988, 3, 15),
    uppercase: 'THIS WAS UPPER CASE',
    custom: 'World',
  };

  constructor() {
  }

  getBullets() {
    return this.bullets;
  }

  getPipeData() {
    return this.pipeData;
  }
}
