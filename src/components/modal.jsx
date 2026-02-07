import { useEffect, Fragment } from 'react';
import { createPortal } from 'react-dom';
import { X } from "lucide-react";
import PropTypes from 'prop-types';

export const Modal = ({ 
    isOpen, 
    onClose, 
    title, 
    children, 
    titleClassName = "",
    imageOnly = false
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

    // Always render modal at document root using portal
    return createPortal(
        <Fragment>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={onClose}
                aria-hidden="true"
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    className={imageOnly ? "" : "modal"}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button for image-only modals - absolutely positioned */}
                    {imageOnly && (
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-wetsoil p-2 hover:cursor-pointer z-10 bg-white/80 rounded-full hover:scale-105"
                            aria-label="Close modal"
                        >
                            <X />
                        </button>
                    )}

                    {/* Header with close button for regular modals */}
                    {!imageOnly && (
                        <div className="modal-header">
                            <h2 className={`text-h2 text-wetsoil ${titleClassName}`}>{title}</h2>
                            <button
                                onClick={onClose}
                                className="text-wetsoil p-2 hover:cursor-pointer"
                                aria-label="Close modal"
                            >
                                <X className='hover:scale-105'/>
                            </button>
                        </div>
                    )}

                    <div className={imageOnly ? "p-0" : "p-6 pt-2 overflow-y-auto flex-1"}>
                        {children}
                    </div>
                </div>
            </div>
        </Fragment>,
        document.body
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    titleClassName: PropTypes.string,
    imageOnly: PropTypes.bool,
};