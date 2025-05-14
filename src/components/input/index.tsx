import { InputHTMLAttributes } from "react";
import './index.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input( props: InputProps) {
    return(
        <input 
            {...props}
            className={`w-full border-[1px] px-[24px] py-[18px] rounded-[8px] `}
        />
    )
}