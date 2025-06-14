import React from "react";
import type { FormData } from "../types";
import { availableSessions } from "./Step2";

interface Step4Props {
  data: FormData;
}

const getSessionLabels = (sessionId: string[]): string => {
  if (!sessionId || sessionId.length === 0) return "Seçilmedi";
  return sessionId
    .map((id) => {
      const session = availableSessions.find(
        (s: { id: string }) => s.id === id
      );
      return session ? session.label : id;
    })
    .join(", ");
};

const getMealPreferenceLabel = (
  preference: FormData["mealPreference"]
): string => {
  switch (preference) {
    case "none":
      return "Özel bir tercih yok.";
    case "vegan":
      return "Vegan";
    case "vegetarian":
      return "Vejetaryan";
    default:
      return "Belirtilmedi"; // ''
  }
};

const getTshirtSizeLabel = (size: FormData["tshirtSize"]): string => {
  switch (size) {
    case "s":
      return "Small";
    case "m":
      return "Medium";
    case "l":
      return "Large";
    case "xl":
      return "X-Large";
    default:
      return "Belirtilmedi";
  }
};

const Step4: React.FC<Step4Props> = ({ data }) => {
  return (
    <div>
      <h2>Gözden Geçir ve Gönder</h2>
      <p>
        Lütfen bilgilerinizi kontrol edin. Her şey doğruysa "Kaydı Tamamla"
        butonuna tıklayın.
      </p>
      <div className="review-section">
        <h3>Kişisel Bilgiler</h3>
        <p>
          <strong>Ad:</strong> {data.firstName || "Belirtilmedi"}
        </p>
        <p>
          <strong>Soyad:</strong> {data.lastName || "Belirtilmedi"}
        </p>
        <p>
          <strong>E-posta:</strong> {data.email || "Belirtilmedi"}
        </p>
        <p>
          <strong>Telefon:</strong> {data.phone || "Belirtilmedi"}
        </p>
      </div>

      <div className="review-section">
        <h3>Etkinlik Detayları</h3>
        <p>
          <strong>Oturumlar:</strong>{" "}
          {getSessionLabels(data.sessions)}
        </p>
        <p>
          <strong>Yemek Tercihi:</strong>{" "}
          {getMealPreferenceLabel(data.mealPreference)}
        </p>
        <p>
          <strong>Tişört Bedeni:</strong> {getTshirtSizeLabel(data.tshirtSize)}
        </p>
      </div>

      <div className="review-section">
        <h3>Özel Gereksinimler ve Onay</h3>
        <p>
          <strong>Erişilebilirlik İhtiyaçları:</strong>{" "}
          {data.accessibilityNeeds || "Belirtilmedi"}
        </p>
        <p>
          <strong>Politika Onayı:</strong>{" "}
          {data.agreedToPolicy ? "Kabul Edildi" : "Kabul Edilmedi"}
        </p>
      </div>
    </div>
  );
};

export default Step4;
