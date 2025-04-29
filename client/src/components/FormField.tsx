import React from "react";

interface FormFieldProps {
  field: any;
  value: string;
  onChange: (value: string) => void;
}

const FormField: React.FC<FormFieldProps> = ({ field, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  if (field.type === "textarea") {
    return (
      <textarea
        placeholder={field.placeholder}
        required={field.required}
        value={value}
        onChange={handleChange}
      />
    );
  }

  if (field.type === "dropdown") {
    return (
      <select value={value} onChange={handleChange} required={field.required}>
        {field.options?.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      type={field.type}
      placeholder={field.placeholder}
      required={field.required}
      value={value}
      onChange={handleChange}
    />
  );
};

export default FormField;