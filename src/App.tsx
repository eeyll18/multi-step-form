import React, { useState } from "react";
import "./App.css";
import type { FormData, FormErrors } from "./types";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

const TOTAL_STEPS = 4;

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  sessions: [],
  mealPreference: "",
  tshirtSize: "",
  accessibilityNeeds: "",
  agreedToPolicy: false,
};

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;
    setErrors({}); // önceki hatalar

    if (step === 1) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = "Ad alanı zorunludur.";
        isValid = false;
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = "Soyad alanı zorunludur.";
        isValid = false;
      }
      if (!formData.email.trim()) {
        newErrors.email = "E-posta zorunludur.";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Geçerli bir e-posta adresi girin.";
        isValid = false;
      }
      if (formData.phone && !/^\+?[0-9\s-()]*$/.test(formData.phone)) {
        newErrors.phone = "Geçerli bir telefon girin.";
        isValid = false;
      }
    } else if (step === 2) {
      if (formData.sessions.length === 0) {
        newErrors.sessions = "En az bir oturum seçmelisiniz.";
        isValid = false;
      }
      if (!formData.mealPreference) {
        newErrors.mealPreference = "Yemek tercihinizi belirtin.";
        isValid = false;
      }
    } else if (step === 3) {
      if (!formData.agreedToPolicy) {
        newErrors.agreedToPolicy = "Gizlilik politikasını kabul etmelisiniz.";
        isValid = false;
      }
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkboxElement = e.target as HTMLInputElement; // type assertion
      const {
        checked,
        name: checkboxName,
        value: checkboxValue,
      } = checkboxElement;

      if (checkboxName === "agreedToPolicy") {
        setFormData((prev) => ({ ...prev, [checkboxName]: checked }));
      } else if (checkboxName === "sessions") {
        setFormData((prev) => ({
          ...prev,
          sessions: checked
            ? [...prev.sessions, checkboxValue]
            : prev.sessions.filter((session) => session !== checkboxValue),
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Kullanıcı yazarken/seçim yaparken ilgili hatayı temizle
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (name === "sessions" && errors.sessions) {
      setErrors((prev) => ({ ...prev, sessions: undefined }));
    }
    if (name === "agreedToPolicy" && errors.agreedToPolicy) {
      setErrors((prev) => ({ ...prev, agreedToPolicy: undefined }));
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < TOTAL_STEPS) {
        setCurrentStep((prev) => prev + 1);
        setErrors({});
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setErrors({});
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentStep === TOTAL_STEPS && validateStep(3)) {
      alert("Kayıt Alındı!");
      setFormData(initialFormData);
      setCurrentStep(1);
      setErrors({});
    } else if (currentStep !== TOTAL_STEPS) {
      console.error("Gönderme işlemi sadece son adımda yapılabilir.");
    } else {
      alert("Lütfen formdaki hataları düzeltin.");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1 data={formData} errors={errors} handleChange={handleChange} />
        );
      case 2:
        return (
          <Step2
            data={{
              sessions: formData.sessions,
              mealPreference: formData.mealPreference,
              tshirtSize: formData.tshirtSize,
            }}
            errors={{
              sessions: errors.sessions,
              mealPreference: errors.mealPreference,
            }}
            handleChange={handleChange}
          />
        );
      case 3:
        return (
          <Step3
            data={{
              agreedToPolicy: formData.agreedToPolicy,
              accessibilityNeeds: formData.accessibilityNeeds,
            }}
            errors={{ agreedToPolicy: errors.agreedToPolicy }}
            handleChange={handleChange}
          />
        );
      case 4:
        return <Step4 data={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <h1>Etkinlik Kayıt Formu</h1>
      <div className="progress-bar">
        {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={`progress-step ${currentStep >= step ? "active" : ""} ${
              currentStep === step ? "current" : ""
            }`}
          >
            {step}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {renderStep()}
        <div className="navigation-buttons">
          {currentStep > 1 && (
            <button type="button" onClick={prevStep}>
              Geri
            </button>
          )}
          {currentStep < TOTAL_STEPS && (
            <button type="button" onClick={nextStep}>
              İleri
            </button>
          )}
          {currentStep === TOTAL_STEPS && (
            <button type="submit">Kaydı Tamamla</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
