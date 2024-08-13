'use client';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Notification = ({ message, show, duration = 1000, onClose }) => {
    const [visible, setVisible] = useState(show);

    useEffect(() => {
        if (show) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
                onClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [show, duration, onClose]);

    if (!visible) return null;

    return createPortal(
        <div className="fixed top-4 right-4 z-50 p-4 bg-green-600 text-white rounded-lg shadow-lg transition-opacity duration-300 ease-out">
            <p className="text-sm font-medium">{message}</p>
        </div>,
        document.body
    );
};

export default Notification;
