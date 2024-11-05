"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputProps {
    type: string;
    placeholder: string;
}

export default function Input({ type, placeholder }: InputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <div className="w-full">
            {type === "password" ? (
                <div className="flex items-center border border-zinc-300
                justify-between px-4 py-3 rounded-md">
                    <input className="outline-none w-full placeholder:opacity-75
                    font-light"
                        placeholder={placeholder}
                        type={isPasswordVisible ? "text" : "password"}
                    />
                    {isPasswordVisible ? (
                        <FaEye size={24} className="cursor-pointer"
                            onClick={() => setIsPasswordVisible(!isPasswordVisible)} />
                    ) : (
                        <FaEyeSlash size={24} className="cursor-pointer"
                            onClick={() => setIsPasswordVisible(!isPasswordVisible)} />
                    )}
                </div>
            ) : (
                <input className="rounded-md placeholder:opacity-75
                font-light
                border border-zinc-300 px-4 py-3 outline-none
                w-full" placeholder={placeholder} type={type} />
            )}
        </div>
    );
}
