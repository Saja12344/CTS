import React, { useCallback } from "react";

export const Field: React.FC<{
  label: string;
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
}> = ({ label, name, value, setValue, disabled }) => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setValue(e.currentTarget.value);
    },
    [setValue],
  );

  return (
    <label className="block w-full">
      <span className="text-xs uppercase tracking-[0.12em] text-unfocused-border-color mb-1.5 block">
        {label}
      </span>
      <input
        type="text"
        autoComplete="off"
        className="leading-[1.7] block w-full rounded-geist bg-background p-geist-half text-foreground text-sm border border-unfocused-border-color transition-colors duration-150 ease-in-out focus:border-focused-border-color outline-none"
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
