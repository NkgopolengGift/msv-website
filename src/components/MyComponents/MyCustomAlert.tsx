import { useEffect } from "react";
import { FaExclamationCircle } from "react-icons/fa";

interface CustomAlertProps {
  message: string;
  type: "success" | "error" | "warning";
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const alertStyles = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-black",
};

export function CustomAlert({
  message,
  type,
  visible,
  setVisible,
}: CustomAlertProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [visible, setVisible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed top-16 right-0 m-4 p-4 rounded-md shadow-lg flex items-center space-x-2 ${alertStyles[type]}`}
    >
      <FaExclamationCircle />
      <span>{message}</span>
    </div>
  );
}
