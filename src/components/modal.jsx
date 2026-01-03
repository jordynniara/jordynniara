import { useEffect } from 'react';
import {X} from "lucide-react";

export const Modal = ({ 
    isOpen, 
    onClose, 
    title, 
    children, 
    titleClassName = ""
}) => {
    // Close modal on Escape key press
    useEffect(() => {
    const handleEscape = (e) => {
        if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
        document.addEventListener('keydown', handleEscape);
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }

    return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
    };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
    <>
        {/* Backdrop */}
        <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
        aria-hidden="true"
        />

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="relative bg-pebble rounded-lg shadow-2xl border-4 border-white max-w-4xl w-full max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 shadow-sm bg-pebble p-6 flex items-center justify-between z-10 flex-shrink-0">
                <h2 className={`text-h2 text-wetsoil ${titleClassName}`}>{title}</h2>
                <button
                    onClick={onClose}
                    className="text-wetsoil p-2 hover:cursor-pointer"
                    aria-label="Close modal"
                >
                    <X className='hover:scale-105'/>
                </button>
                </div>
                <div className="p-6 pt-2 pt-0 overflow-y-auto flex-1">
                {children}
                </div>
            </div>
        </div>
    </>
    );
};