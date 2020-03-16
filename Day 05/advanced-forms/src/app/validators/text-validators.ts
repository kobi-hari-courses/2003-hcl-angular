import { ValidatorFn, AbstractControl } from '@angular/forms';

export interface CounterErrors {
    requiredChars: number, 
    chars: number, 
    requiredWords: number, 
    words: number
}

export class TextValidators {
    static counters(minChars: number, minWords: number): ValidatorFn {
        return (ctrl: AbstractControl) => {
            let val: string = '';
            if ((ctrl) && (typeof(ctrl.value) === 'string'))
                val = ctrl.value as string;
            
            const chars = val.length;
            const words = val.split(' ').filter(s => s).length;

            if ((chars >= minChars) && (words >= minWords)) return null;

            let errors: CounterErrors = {
                requiredChars: minChars, 
                chars: chars, 
                requiredWords: minWords, 
                words: words
            };

            return {
                counters: errors
            };
        }
    }
}