import React from "react";

export default function Modal({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-white w-full px-4 sm:px-24 py-24 space-y-10 md:rounded-3xl
        flex flex-col justify-center items-center h-screen sm:h-auto max-[330px]:mt-[120px]">
            {children}
        </div>
    )
}