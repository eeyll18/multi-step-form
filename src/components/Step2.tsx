import React from "react";
import type { FormData, FormErrors } from "../types";

interface Step2Props {
  data: Pick<FormData, "sessions" | "mealPreference" | "tshirtSize">;
  errors: Pick<FormErrors, "sessions" | "mealPreference">;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export const availableSessions = [
  { id: "session1", label: "Açılış Konuşması & Keynote" },
  { id: "session2", label: "React Ekosistemindeki Yenilikler" },
  { id: "session3", label: "TypeScript ile Güvenli Kod Geliştirme" },
  { id: "session4", label: "Vite: Geleceğin Build Aracı" },
];

const Step2: React.FC<Step2Props> = ({ data, errors, handleChange }) => {
  return (
    <div>
      <h2>Etkinlik Detayları</h2>
      <fieldset>
        <legend>Hangi oturumlara katılmak istiyorsunuz? (En az 1 seçim)</legend>
        {availableSessions.map((session) => (
          <div key={session.id}>
            <input
              type="checkbox"
              id={session.id}
              name="sessions"
              value={session.id}
              checked={data.sessions.includes(session.id)}
              onChange={handleChange}
              aria-describedby={errors.sessions ? "sessionsError" : undefined}
            />
            <label htmlFor={session.id}>{session.label}</label>
          </div>
        ))}
        {errors.sessions && (
          <p id="sessionsError" style={{ color: "red" }}>
            {errors.sessions}
          </p>
        )}
      </fieldset>
      <div>
        <label htmlFor="mealPreference">Yemek Tercihiniz:</label>
        <select
          id="mealPreference"
          name="mealPreference"
          value={data.mealPreference}
          onChange={handleChange}
          aria-invalid={!!errors.mealPreference}
          aria-describedby={
            errors.mealPreference ? "mealPreferenceError" : undefined
          }
        >
          <option value="">Seçiniz...</option>
          <option value="vegetarian">Vejetaryen</option>
          <option value="vegan">Vegan</option>
          <option value="none">Özel bir tercihim yok</option>
        </select>
        {errors.mealPreference && (
          <p id="mealPreferenceError" style={{ color: "red" }}>
            {errors.mealPreference}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="tshirtSize">Tişört Bedeniniz (Opsiyonel):</label>
        <select
          name="tshirtSize"
          id="tshirtSize"
          value={data.tshirtSize}
          onChange={handleChange}
        >
          <option value="">Seçiniz...</option>
          <option value="s">Small (S)</option>
          <option value="m">Medium (M)</option>
          <option value="l">Large (L)</option>
          <option value="xl">X-Large (XL)</option>
        </select>
      </div>
    </div>
  );
};

export default Step2;
