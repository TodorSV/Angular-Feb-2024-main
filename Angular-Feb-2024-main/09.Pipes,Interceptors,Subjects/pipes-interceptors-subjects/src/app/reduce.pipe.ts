import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',

  // pure: true,  by default. Result is memoized, invoked on change of the reference
  
  pure: false, // Not Memoized, кешираме с цел перформанс, not a pure function
  // Invoked on every change detection cycle regardless of whether the input has changed
})
export class ReducePipe<T> implements PipeTransform {

  transform(array: T[], callbackFn: (acc: any, current: any) => any,
    initialValue: T
  ): unknown {

    return array.reduce(callbackFn, initialValue);
  }

}
