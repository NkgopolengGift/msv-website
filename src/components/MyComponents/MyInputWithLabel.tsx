import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";

interface MyInputWithLabelProps {
  labelName: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function MyInputWithLabel({
  labelName,
  type,
  placeholder,
  value,
  onChange,
}: MyInputWithLabelProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 relative">
      <Label
        className="mb-5 font-robert-medium font-semibold text-lg"
        htmlFor={type}
      >
        {labelName}
      </Label>
      <Input
        type={showPassword && type === "password" ? "text" : type}
        id={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 mb-4 h-14  text-lg border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      {type === "password" && (
        <div
          className="absolute mt-10 inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </div>
      )}
    </div>
  );
}
