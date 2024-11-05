import React from "react";

export default function Tag({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-black text-white
        border-zinc-700 border rounded-full px-4 py-1 font-semibold">
            {children}
        </div>
    )
}