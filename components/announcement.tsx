"use client"

import { X } from "lucide-react";

interface AnnouncementProps {
    onClose?: () => void;
}

export const Announcement=({
    onClose=()=>{}
}:AnnouncementProps)=>{
    return(
        <div className="w-full">
            <div className="w-full h-[40px] text-[16px] p-0 font bg-[#2455f6] flex items-center justify-center text-white relative">
                <p className="text-center font-normal not-italic">
                    Use code <b>DECEM10</b> for <b>£10 OFF</b> your first order
                </p>
                <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer" onClick={onClose}>
                    <X absoluteStrokeWidth strokeWidth={1} color="white" />
                </div>
            </div>
        </div>
    )
}