import React from "react";
import type { FormData, FormErrors } from "../types";

interface Step3Props {
  data: Pick<FormData, "accessibilityNeeds" | "agreedToPolicy">;
  errors: Pick<FormErrors, "agreedToPolicy">;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Step3: React.FC<Step3Props> = ({ data, errors, handleChange }) => {
  return (
    <div>
      <h2>Özel Gereksinimler ve Onay</h2>
      <div>
        <label htmlFor="accessibilityNeeds">
          Erişilebilirlik İhtiyaçlarınız (Varsa belirtiniz):
        </label>
        <textarea
          id="accessibilityNeeds"
          name="accessibilityNeeds"
          value={data.accessibilityNeeds}
          onChange={handleChange}
          rows={4}
          placeholder="Örn: Tekerlekli sandalye rampası, işaret dili tercümanı vb."
        />
      </div>

      <div>
        <input
          type="checkbox"
          id="agreedToPolicy"
          name="agreedToPolicy"
          checked={data.agreedToPolicy}
          onChange={handleChange}
          aria-invalid={!!errors.agreedToPolicy}
          aria-describedby={
            errors.agreedToPolicy ? "agreedToPolicyError" : undefined
          }
        />
        <label
          htmlFor="agreedToPolicy"
          style={{ display: "inline", marginLeft: "5px", fontWeight: "normal" }}
        >
          <a
            href="/privacy-policy.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gizlilik Politikasını
          </a>
          ve
          <a href="/terms.html" target="_blank" rel="noopener noreferrer">
            Kullanım Şartlarını
          </a>
          okudum, kabul ediyorum.
        </label>
        {errors.agreedToPolicy && (
          <p id="agreedToPolicyError" style={{ color: "red" }}>
            {errors.agreedToPolicy}
          </p>
        )}
      </div>
    </div>
  );
};

export default Step3;
