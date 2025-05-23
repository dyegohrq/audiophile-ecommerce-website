import { checkoutFormData } from '../../pages/Checkout';
import { UseFormRegister } from 'react-hook-form'

type InputProps = {
    id: keyof checkoutFormData ;
    title: string;
    placeholder: string;
    register: UseFormRegister<checkoutFormData>;
    requiredMessage: string;
    error: string | undefined;
    pattern?: {
        value: RegExp,
        message: string
    }
}

export function Input(
    {
        id, 
        placeholder,
        title,
        register,
        requiredMessage,
        pattern,
        error
    }: InputProps) {
    return(
        <div>
            <label 
                htmlFor={id}
                className=' flex justify-between text-[12px] tracking-[-0.21px] font-bold '
                style={ 
                    {
                        color: error ? '#cd2c2c' : ''
                    }
                 }
            > 
                {title} 

                {
                    error && (<p className=' text-red text-[12px] text-medium tracking-[-0.21px] ' > {requiredMessage} </p>)
                }    
            </label>
            <input
                placeholder={placeholder}
                className={`w-full border-[1px] border-White-600 text-[14px] font-bold tracking-[-0.25] outline-0 caret-Orange-900 text-Black-900 px-[24px] py-[18px] rounded-[8px] placeholder:text-White-300 focus:border-Orange-900 hover:border-Orange-900 `}
                style={
                    {
                        borderColor: error ? "#cd2c2c" : ''
                    }
                }
                { ...register(id, {
                    required: requiredMessage,
                    pattern: pattern
                }) }
            />
        </div>
    )
}