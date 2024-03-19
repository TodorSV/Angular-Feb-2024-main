import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-interceptors-subjects';

  user = { name: 'Django', age: 30, list: [1, 2, 3, 4, 5] };

  sum(acc: number, current: number) : number {
    return acc + current
  };

  addProperty() {
    (this.user as any).test = 'Test 123';
  }

}
