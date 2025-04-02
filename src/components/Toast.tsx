import React, { useEffect } from 'react';
import styles from '../styles/components/Toast.module.css';

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
    styles.toastContainer,
    !isVisible && styles.hidden,
    styles[variant]
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