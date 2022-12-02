import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const Error: React.FC = () => {
  const errorText = useTypedSelector((state) => state.app.error);
  return (
    <div
      className="w-full container mx-auto fixed top-2 left-1/2 transform -translate-x-1/2 p-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <span className="font-medium">Помилка</span> {errorText}
    </div>
  );
};
