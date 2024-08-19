import React, { useEffect, useState } from 'react';
import Button from "../button/button";

interface ModalProps {
    onClose: () => void;
    content: React.ReactNode
    type: "basic" | "form" | "open"
    dismissButtonText: string
    header: string
    redirectButtonText? : string
    redirectButtonLink? : () => void
}

export default function Modal({ onClose, content, type, header, dismissButtonText, redirectButtonText, redirectButtonLink}: ModalProps) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [opacity, setOpacity] = useState("opacity-100")

    useEffect(() => {
        // Set transition flag to ensure the animation runs correctly
        setIsTransitioning(true);

        // Clean up transition flag after animation ends
        return () => setIsTransitioning(false) ;
    }, []);

    const handleClose = () => {
        // Start fade-out and slide-up animation
        setTimeout (() => setOpacity("opacity-0"), 1000)
        setIsTransitioning(false);
        setTimeout(() => onClose(), 200); // Match the duration of the animation
    };

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center transition-opacity duration-00 ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}
        >
            {/* Overlay background hitam dengan opacity 50% */}
            <div
                className={`absolute inset-0 bg-neutral-80 transition-opacity duration-500 ${isTransitioning ? 'opacity-50' : 'opacity-0'}`}
                onClick={handleClose}
            ></div>

            {/* Modal content */}
            <div
                className={`relative z-10  sm:w-[300px] w-10/12 card rounded-md outline outline-neutral-20 bg-white w-60 transition-transform transform duration-500 ease-out ${isTransitioning ? 'translate-y-0 opacity-100' : `${opacity} translate-y-[-50px]`}`}
            >
                <div className="card-header p-3 flex flex-col gap-2 font-extrabold">
                    {header}
                </div>
                <hr className="border-neutral-20" />
                <div className="card-body p-4">
                    {content}
                </div>
                <div className="card-footer p-4 flex flex-col gap-2">
                    {
                        type==="basic" && <Button type="primary" onClick={handleClose} title={dismissButtonText}></Button>     
                    }
                    {
                         (type==="form" || type==="open") && 
                         <>
                             <Button type="secondary" onClick={handleClose} title={dismissButtonText}></Button>
                             <Button title={redirectButtonText} onClick={redirectButtonLink}></Button>
                         </>  
                    }
                </div>
            </div>
        </div>
    );
}
