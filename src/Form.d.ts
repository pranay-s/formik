import * as React from 'react';
export declare type FormikFormProps = Pick<
  React.FormHTMLAttributes<HTMLFormElement>,
  Exclude<
    keyof React.FormHTMLAttributes<HTMLFormElement>,
    'onReset' | 'onSubmit'
  >
>;
declare function Form(props: FormikFormProps): JSX.Element;
declare namespace Form {
  var displayName: string;
}
export default Form;
