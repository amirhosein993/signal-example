import {Component, signal, Signal} from '@angular/core';

@Component({
  selector: 'app-array-examples',
  templateUrl: './array-examples.component.html',
  styleUrls: ['./array-examples.component.sass']
})
export class ArrayExamplesComponent {

  public numbers = signal<number[]>([]);
  createArraySignal() {
    this.numbers = signal([1 ,2 ,3]);
  }

  mutateArray() {
    this.numbers.mutate(value => {
      value.push(...[4,5,6]);
    })
  }
}
