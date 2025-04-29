"use client";

import React, { useState } from "react";
import { createUser, getForm } from "../services/api";
import FormSection from "../components/FormSection";

export default function Home() {
  const [rollNumber, setRollNumber] = useState("");
  const [name, setName] = useState("");
  const [form, setForm] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});
  const [currentSection, setCurrentSection] = useState(0);
  const handleLogin = async () => {
    console.log({ rollNumber, name });
    try {
      await createUser({ rollNumber, name });
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        console.log("User already exists, proceeding...");
      } else {
        throw error;
      }
    }
    const formResponse = await getForm(rollNumber);
    console.log(formResponse);
    setForm(formResponse.form);
  };

  const handleChange = (fieldId: string, value: string) => {
    setFormData({ ...formData, [fieldId]: value });
  };

  const handleNext = () => {
    setCurrentSection((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentSection((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  if (!form) {
    return (
      <div className="grid place-items-center text-black">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Roll Number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  const section = form.sections[currentSection];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <FormSection section={section} formData={formData} onChange={handleChange} />
        <div className="flex justify-between mt-4">
          {currentSection > 0 && (
            <button
              onClick={handlePrev}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Previous
            </button>
          )}
          {currentSection < form.sections.length - 1 && (
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Next
            </button>
          )}
          {currentSection === form.sections.length - 1 && (
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}