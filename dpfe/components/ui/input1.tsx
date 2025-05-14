"use client";

type InputProps = {
  label: string;
  type?: string;
  placeholder: string;
  icon?: React.ReactNode;
  value?: string; // Add value prop
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange prop
};

export default function Input1({
  label,
  type = "text",
  placeholder,
  icon,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="pb-2">
      <label className="block mb-2 text-sm font-medium text-[#111827]">
        {label}
      </label>

      <div className="relative">
        {icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            {icon}
          </span>
        )}

        <input
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          value={value} 
          onChange={onChange} 
          className={`mb-2 bg-gray-50 text-gray-500 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4`}
        />
      </div>
    </div>
  );
}
