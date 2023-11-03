"use client";

import { useState } from "react";
import { Announcement } from "./announcement";

const Navbar = () => {
    const [showAnnouncement, setShowAnnouncement] = useState<boolean>(true)
    return ( 
        <div>
            <div>
            {showAnnouncement && (<Announcement onClose={()=>setShowAnnouncement(false)}/>)}
            </div>
            <div className="flex items-center justify-between w-full px-2 h-[100%]">
                <div className="w-[33.3333%] flex align-baseline gap-x-6 items-center flex-wrap">
                    <span className="text-[100%]"><strong>SHOP</strong></span>
                    <span><strong>STORY</strong></span>
                </div>
                <div className="w-[33.3333%] items-center justify-center flex align-baseline">
                    <strong>DECEM</strong>
                </div>
                <div className="w-[33.3333%] flex items-center align-baseline justify-end pr-3">
                    <strong className="font-noraml">BASKET</strong>&nbsp;<em>(0)</em>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;