import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  // pure: true,  by default, but we want to change it to false
  pure: false, // Memoized, кешираме с цел перформанс
})
export class ReducePipe<T> implements PipeTransform {

  transform(array: T[], callbackFn: (acc: any, current: any) => any,
    initialValue: T
  ): unknown {

    return array.reduce(callbackFn, initialValue);
  }

}
