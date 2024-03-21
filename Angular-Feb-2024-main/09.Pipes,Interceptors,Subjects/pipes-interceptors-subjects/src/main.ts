import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, map } from 'rxjs';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// Refresher

// const p = new Promise((resolve, reject) => {
//   resolve(200);
// });

// p.then(console.log);

// const observable$ = new Observable<number>((observer) => {
//   observer.next(101);
//   observer.next(102);
//   observer.next(103);

//   // obs.error(new Error('Something went wrong'));

//   return () => {
//     // Clean up

//   };
// });



// observable$.pipe(map((n) => n + 1)).subscribe({
//   next: console.log,
//   error: (err) => console.error('Error form subscribe', err),
// });


// SUBJECTS

// const subject$$ = new Subject();
// subject$$.subscribe(console.log); // A
// subject$$.next(100);

// subject$$.subscribe(console.log); // B
// subject$$.next(200);


// Behavior Subject

// const bSubject$$ = new BehaviorSubject(100);
// bSubject$$.subscribe(console.log); // A

// setTimeout(() => {
//   bSubject$$.next(200);
// }, 2000);


// Replay Subjects

// const rSubject$$ = new ReplaySubject(5);
// rSubject$$.next(1000);
// rSubject$$.subscribe((data) => console.log('Subscriber A', data));


// for (let i = 1; i <= 30; i++) {
//   rSubject$$.next(i); 
// }

// console.log('------------------');


// rSubject$$.subscribe((data) => console.log('Subscriber B', data));


// Async Subject

const asyncSubject$$ = new AsyncSubject();
asyncSubject$$.next(1);
asyncSubject$$.next(2);
asyncSubject$$.next(3);
asyncSubject$$.subscribe((data) => console.log(`Subscriber A', ${data}`));
asyncSubject$$.complete(); 