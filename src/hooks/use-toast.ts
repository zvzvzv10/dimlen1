import { useState } from 'react';

interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((toasts) => [...toasts, { ...toast, id }]);
  };

  const dismiss = (id: string) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  return { toast, dismiss, toasts };
}

// Создаем отдельную функцию toast
export const toast = {
  // Базовый метод
  show: (options: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    return { ...options, id };
  }
}; 