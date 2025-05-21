import React from "react";

export function Container({children}: {children:React.ReactNode}): React.JSX.Element{
    return(
        <div className=" w-full px-[24px] md:px-[40px] lg:px-[10%] " >
            {children}
        </div>
    )
}