import { AbstractControl, ValidatorFn } from "@angular/forms";

export function minAge(age : number) : ValidatorFn | null {
    return (control : AbstractControl) => {
        let maDate : Date = new Date(control.value)
        if(control.value == null) return null
        if(maDate.getFullYear() <= (new Date().getFullYear() - age)) {
            return null
        }
        else return {dateError : 'Age minimum : 13 ans'}
    }
}