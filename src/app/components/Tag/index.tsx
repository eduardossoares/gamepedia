import React from "react";

export default function Tag({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-black text-white max-sm:text-sm px-2 py-1
        border-zinc-700 border rounded-full sm:px-4 sm:py-1 font-semibold">
            {children}
        </div>
    )
}