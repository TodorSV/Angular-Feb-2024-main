import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-interceptors-subjects';

  user = { name: 'Django', age: 30, list: [1, 2, 3, 4, 5] };
}
