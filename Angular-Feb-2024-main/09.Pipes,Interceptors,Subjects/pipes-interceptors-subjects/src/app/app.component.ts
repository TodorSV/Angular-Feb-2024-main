import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipes-interceptors-subjects';

  user = { name: 'Django', age: 30, list: [1, 2, 3, 4, 5] };

  sum(acc: number, current: number): number {
    return acc + current
  };

  addProperty() {
    (this.user as any).test = 'Test 123';

    this.user.list = [...this.user.list, 150];
  }

  p = new Promise((resolve) => {
    setTimeout(() => {
      resolve(1111);
    }, 2000);
  });


  // Observable  time$
  time$ = interval(1000).pipe(map(() => new Date()));


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.loadUsers().subscribe({
      next: (data) =>console.log(data),
      
    });
  }

}
