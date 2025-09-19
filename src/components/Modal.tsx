import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="glass-card rounded-2xl shadow-professional max-w-md w-full mx-4 fade-in-up">
        <div className="flex items-center justify-between p-8 border-b border-white/10">
          <h2 className="text-2xl font-semibold gradient-text">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;