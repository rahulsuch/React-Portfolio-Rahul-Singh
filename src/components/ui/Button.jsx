import React from "react";
import { motion } from "framer-motion";

export const Button = React.forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      icon: Icon,
      iconRight: IconRight,
      isLoading = false,
      onClick,
      type = "button",
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "text-xs px-3 py-1.5 rounded-lg gap-1.5",
      md: "text-sm px-4 py-2 rounded-xl gap-2",
      lg: "text-base px-5 py-2.5 rounded-xl gap-2.5 font-semibold",
      icon: "p-2 rounded-xl",
    };

    const variantClasses = {
      primary:
        "bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20 border border-blue-500 active:scale-[0.98]",
      secondary:
        "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 active:scale-[0.98]",
      outline:
        "bg-transparent hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 active:scale-[0.98]",
      ghost:
        "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border-transparent",
      glow:
        "relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:brightness-110 active:scale-[0.98]",
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={`inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`}
        {...props}
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          Icon && <Icon className="w-4 h-4 shrink-0" />
        )}
        {children}
        {!isLoading && IconRight && <IconRight className="w-4 h-4 shrink-0" />}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
