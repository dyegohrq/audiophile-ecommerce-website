import { checkoutFormData } from '../../pages/Checkout';
import './index.css'

type InputProps = {
    id: keyof checkoutFormData ;
    title: string;
    placeholder: string
}

export function Input(
    {
        id, 
        placeholder,
        title
    }: InputProps) {
    return(
        <div>
            <label 
                htmlFor={id}
            > {title} </label>
            <input
                placeholder={placeholder}
                className={`w-full border-[1px] px-[24px] py-[18px] rounded-[8px] `}
            />
        </div>
    )
}