import { AlertCircle, CheckCircle } from 'lucide-react';

interface NotificationProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

export default function Notification({
  type,
  message,
  onClose,
}: NotificationProps) {
  return (
    <div
      className={`fixed top-4 right-4 z-50 flex items-center p-4 rounded-lg shadow-lg 
      ${type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
    >
      {type === 'success' ? (
        <CheckCircle className="w-5 h-5 mr-2" />
      ) : (
        <AlertCircle className="w-5 h-5 mr-2" />
      )}
      <span className="font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-gray-400 hover:text-gray-900"
      >
        ×
      </button>
    </div>
  );
}
