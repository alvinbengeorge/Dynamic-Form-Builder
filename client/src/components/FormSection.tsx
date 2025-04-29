import React from "react";
import FormField from "./FormField";

interface FormSectionProps {
  section: any;
  formData: any;
  onChange: (fieldId: string, value: string) => void;
}

const FormSection: React.FC<FormSectionProps> = ({ section, formData, onChange }) => {
  return (
    <div>
      <h2>{section.title}</h2>
      <p>{section.description}</p>
      {section.fields.map((field: any) => (
        <FormField
          key={field.fieldId}
          field={field}
          value={formData[field.fieldId] || ""}
          onChange={(value) => onChange(field.fieldId, value)}
        />
      ))}
    </div>
  );
};

export default FormSection;