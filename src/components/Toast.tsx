import React, { useEffect } from 'react';
import '../styles/components/Toast_module.css';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
  variant?: 'success' | 'error' | 'warning' | 'info';
}

const Toast: React.FC<ToastProps> = ({ 
  message, 
  isVisible, 
  onClose, 
  duration = 3000,
  variant = 'info'
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const containerClasses = [
    'toast-container',
    !isVisible && 'hidden',
    variant
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={containerClasses}
      role="alert"
      aria-live="polite"
    >
      {message}
    </div>
  );
};

export default Toast;