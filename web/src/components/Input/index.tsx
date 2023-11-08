import "./style.css";

import { ChangeEvent, HTMLInputTypeAttribute } from "react";

type InputProps = {
  id: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  setState(value: string): void;
  onBlur?(): void;
  showError?: boolean;
}

export function Input({ id, placeholder, type, setState, onBlur, showError }: InputProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setState(value);
  }
 
  return <input 
    className={ `${showError && 'error'} width-full` }
    type={ type }
    name={ id } 
    id={ id } 
    placeholder={ placeholder } 
    onChange={(event) => handleInputChange(event)}
    onBlur={ onBlur }
  />
}
