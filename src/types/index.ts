export interface FormData {
  // step 1
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  // step 2
  sessions: string[];
  mealPreference: "vegetarian" | "vegan" | "none" | "";
  tshirtSize: "s" | "m" | "l" | "xl" | "";
  // step 3
  accessibilityNeeds: string;
  agreedToPolicy: boolean;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  sessions?: string;
  mealPreference?: string;
  agreedToPolicy?: string;
}
