# 📋 Dynamic Form Builder — Qualifier 2

This task will evaluate your skills in React, TypeScript, API integration, dynamic form rendering, and basic UI/UX understanding. Please complete the task in react or nextJs.



**You have 3 hours to complete this task. Once done, fill this form : https://forms.office.com/r/WLCWFwKDg7**

---

## 🚀 Problem Statement

Build a React-based application that allows a student to:

1. **Login** by entering:
   - **Roll Number**
   - **Name**

2. **Register** the user by calling a `POST /create-user` API.

3. **Fetch a dynamic form** structure using `GET /get-form` API after successful login.

4. **Render the form dynamically** based on the structure received.

5. **Validate** inputs dynamically based on the /get-form API response (e.g., required, minLength, minLength etc.).

6. There will be multiple **Sections** in the form, each section has to be validated seperately. User shouldn't be allowed to move to next section if the current sectioin is invalid. 

8. Each section will have a prev and next button, only the last section will have Submit button.

7. **On final/last form submission**, simply `console.log` the collected form data.

---

## 📚 Form Data Structure

When you call `/get-form`, you will receive a JSON structured like this:

```ts
interface FormResponse {
  message: string;
  form: {
    formTitle: string;
    formId: string;
    version: string;
    sections: FormSection[];
  };
}

interface FormSection {
  sectionId: number;
  title: string;
  description: string;
  fields: FormField[];
}

interface FormField {
  fieldId: string;
  type: "text" | "tel" | "email" | "textarea" | "date" | "dropdown" | "radio" | "checkbox";
  label: string;
  placeholder?: string;
  required: boolean;
  dataTestId: string;
  validation?: {
    message: string;
  };
  options?: Array<{
    value: string;
    label: string;
    dataTestId?: string;
  }>;
  maxLength?: number;
  minLength?: number;
}
```

Use this structure to render the form **dynamically**.  
You should not hardcode any field.

---

## 🛠 Requirements

- Use **React**, bonus points for **TypeScript**.
- Render form sections and fields dynamically based on API data.
- Implement validation as per the field metadata.
- Display validation errors properly.
- On form submit, log the collected data to the console.
- UI: Keep it clean and simple, nothing fancy. 
- Focus more on Functionality than UI.

---

## 📡 API Endpoints

- `POST /create-user` — Registers the user (expects roll number and name).
    ```
   - curl --location 'https://dynamic-form-generator-9rl7.onrender.com/create-user' \
            --header 'Content-Type: application/json' \
            --header 'Content-Type: application/json' \
            --data '{
                "rollNumber": {INPUT_ROLL_NUMBER},
                "name": {INPUT_NAME}
            }'
    ```
- `GET /get-form` — Returns the dynamic form structure. (expects roll number)
    ```
   - curl --location 'https://dynamic-form-generator-9rl7.onrender.com/get-form?rollNumber={INPUT_ROLL_NUMBER}'
   ```


---

## ✅ Submission Instructions

- Push your complete code to a GitHub/codesandbox repository (public only).
- Deploy your application using any free hosting platform (e.g., **Vercel**, **Netlify**, **GitHub Pages**).
- Make sure your URLs are **accessible publicly**.
- Share both:
  - GitHub repository link/codesandbox link
  - Deployed application link

Good luck, and happy coding! 🚀