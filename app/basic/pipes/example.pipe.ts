import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'examplePipe'
})
export class ExamplePipe implements PipeTransform {
    transform(value: string, title: string): string {
        return `Hello ${title} ${value}`;
    }
}
