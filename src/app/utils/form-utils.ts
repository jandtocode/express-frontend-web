import { FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils {

    static getTextError(errors: ValidationErrors) {

        for (const key of Object.keys(errors)) {
            switch (key) {
                case 'required':
                    return 'Este campo es requerido';
                case 'maxlength':
                    return `Máximo ${errors['maxlength'].requiredLength} caracteres.`;

                default:
                    return `Error de validación no controlado (${key})`;
            }
        }
        return null;
    }

    static isValidField(form: FormGroup, fieldName: string): boolean | null {
        return (
            !!form.controls[fieldName].errors &&
            form.controls[fieldName].touched
        );
    }

    static getFieldError(form: FormGroup, fieldName: string): string | null {

        if (!form.controls[fieldName]) return null;

        const errors = form.controls[fieldName].errors ?? {};

        return FormUtils.getTextError(errors);

    }
}