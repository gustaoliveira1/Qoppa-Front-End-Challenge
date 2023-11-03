import "./style.css";

import { HTMLInputTypeAttribute } from "react";

type InputProps = {
  id: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
}

export function Input({ id, placeholder, type }: InputProps) {
  return <input 
    className="width-full"
    type={ type }
    name={ id } 
    id={ id } 
    placeholder={ placeholder } 
  />
}
