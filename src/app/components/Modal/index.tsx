import React from "react";

interface ModalProps {
    children: React.ReactNode;
    isProfileModal?: boolean
}

export default function Modal({ children, isProfileModal = false }: ModalProps) {
    return (
        <div className={`bg-white w-full px-4 sm:px-24 ${isProfileModal && "sm:px-4 pb-4 pt-4"} py-24 space-y-10 sm:rounded-3xl
        flex flex-col justify-center items-center h-screen sm:h-auto max-[330px]:mt-[120px]`}>
            {children}
        </div>
    )
}