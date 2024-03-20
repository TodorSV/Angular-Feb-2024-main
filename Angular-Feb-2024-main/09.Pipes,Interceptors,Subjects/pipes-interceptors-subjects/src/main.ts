import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { Observable, map } from 'rxjs';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  // Refresher

  const p = new Promise((resolve, reject) => {
    resolve(200);
  });

  p.then(console.log);

  const o$ = new Observable<number>((obs) => {
    obs.next(101);
    obs.next(102);
    obs.next(103);

    obs.error(new Error('Something went wrong'));

    return () => {
      // Clean up

    };
  });

 
 
  o$.pipe(map((n) => n + 1 )).subscribe({
    next: console.log,
    error: (err) => console.error('Error form subscribe', err),
  });

 