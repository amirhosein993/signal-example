import {Component, computed, signal, Signal} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'signal-example';

  width = signal(0);
  height = signal(0);
  area: Signal<number> = signal(0);
  createSignal() {
    this.width = signal(12);
    this.height = signal(12);
  }

  calculateArea() {
    this.area = computed(()=> this.width() * this.height());
  }

  addToWidth(){
    this.width.update(preValue => preValue + 5);
  }
}
