import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    isWidthFull?: boolean;
    isSearchAgain?: boolean;
}

export default function Button(
    { children, isWidthFull, isSearchAgain = false }: ButtonProps
) {
    return (
        <button className={`bg-black sm:text-lg py-3 px-4 
        text-white
        font-semibold flex items-center justify-center hover:scale-[1.02] duration-300
        rounded-md relative ${!isWidthFull &&
            "sm:px-14"} ${isWidthFull && "w-full"} will-change-transform`}>
            {children}
        </button>
    )
}