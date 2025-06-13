import React from "react";
import type { FormData, FormErrors } from "../types";

interface Step1Props {
  data: Pick<FormData, "firstName" | "lastName" | "email" | "phone">;
  errors: Pick<FormErrors, "firstName" | "lastName" | "email" | "phone">;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step1: React.FC<Step1Props> = ({ data, errors, handleChange }) => {
  return (
    <div>
      <h2>Kişisel Bilgiler</h2>
      <div>
        <label htmlFor="firstName">Adınız:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          aria-invalid={!!errors.firstName}
          aria-describedby={errors.firstName ? "firstNameError" : undefined}
        />
        {errors.firstName && (
          <p id="firstNameError" style={{ color: "red" }}>
            {errors.firstName}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="lastName">Soyadınız:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          aria-invalid={!!errors.lastName}
          aria-describedby={errors.lastName ? "lastNameError" : undefined}
        />
        {errors.lastName && (
          <p id="lastNameError" style={{ color: "red" }}>
            {errors.lastName}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="lastName">E-posta:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "emailError" : undefined}
        />
        {errors.email && (
          <p id="emailError" style={{ color: "red" }}>
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="phone">Telefon:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phoneError" : undefined}
        />
        {errors.phone && (
          <p id="phoneError" style={{ color: "red" }}>
            {errors.phone}
          </p>
        )}
      </div>
    </div>
  );
};

export default Step1;
