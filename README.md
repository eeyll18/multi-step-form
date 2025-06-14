# Çok Adımlı Etkinlik Kayıt Formu

Bu proje, React, TypeScript ve Vite kullanılarak oluşturulmuş, modern, kullanıcı dostu ve güvenlik odaklı çok adımlı bir etkinlik kayıt formudur. Kullanıcıların bir etkinliğe kaydolurken kişisel bilgilerini, etkinlik tercihlerini ve özel gereksinimlerini adım adım girmelerini sağlar.

![Etkinlik Kayıt Formu Ekran Görüntüsü]
(./images/multistep1.png)
(./images/multistep2.png)
(./images/multistep3.png)

## Özellikler

*   **Çok Adımlı Form Yapısı**: Kullanıcı deneyimini iyileştirmek için kayıt süreci mantıksal adımlara bölünmüştür.
    *   Adım 1: Kişisel Bilgiler
    *   Adım 2: Etkinlik Detayları ve Tercihler
    *   Adım 3: Özel Gereksinimler ve Politika Onayı
    *   Adım 4: Gözden Geçirme ve Gönderme
*   **İlerlemeli Form Doğrulama (Client-Side)**: Her adımda anlık geri bildirimlerle kullanıcı girdileri doğrulanır.
*   **Dinamik İlerleme Çubuğu**: Kullanıcının formdaki mevcut konumunu gösterir.

## Kullanılan Teknolojiler

*   **React** (v18+) 
*   **TypeScript** 
*   **Vite** 
*   **CSS**


## Styling & User Interface

The application's user interface is designed to be modern, responsive, and engaging, with a focus on providing a smooth user experience for the multi-step registration form.

### Key Features:

*   **Responsive Design:**
    *   The layout adapts fluidly to various screen sizes (desktops, tablets, and mobile phones) using media queries.
    *   Key breakpoints are defined at `768px`, `600px`, `480px`, and `360px` to ensure optimal viewing and interaction on different devices, with adjustments to padding, font sizes, and element layouts.

*   **Animations & Transitions:**
    *   **Custom Keyframe Animations:** Includes custom CSS keyframe animations:
        *   `fadeIn`: For general element appearance.
        *   `slideInFromRight/Left`: (Defined, can be used for more specific directional entries).
        *   `pulse`: For highlighting interactive elements like the current progress step.
        *   `shake`: Provides immediate visual feedback for invalid input fields.
    *   **Interactive Elements:** Buttons and input fields feature hover and active/focus state transitions (e.g., transform, box-shadow changes, gradient shifts) for better user feedback.

*   **CSS Custom Properties (Variables):**
    *   A comprehensive set of CSS variables (e.g., `--primary-color`, `--error-color`, `--border-radius`, `--box-shadow`) are defined at the `:root` level.
    *   This allows for easy theming, consistent styling across the application, and simpler maintenance of the color palette and common dimensional values.

*   **Enhanced User Experience (UX):**
    *   **Clear Visual Hierarchy:** Appropriate use of headings, spacing, font weights, and distinct section styling.
    *   **Input Feedback:** Input fields show distinct styles on focus and provide immediate visual feedback (border color, box-shadow, shake animation) for validation errors. Error messages are styled for clarity.
    *   **Interactive Progress Bar:** The progress bar dynamically fills as the user advances through steps, with the current step clearly highlighted and animated with a `pulse` effect.





## Kurulum ve Başlatma


Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Depoyu Klonlayın:**
    ```bash
    git clone https://github.com/eeyll18/multi-step-form.git
    cd multi-step-form
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    # veya
    yarn install
    ```

## Ön Gereksinimler

Bu projeyi yerel makinenizde çalıştırmadan önce aşağıdaki yazılımların sisteminizde kurulu olduğundan emin olun:

*   **Node.js**: `v16.x` veya daha üzeri önerilir. (Node.js, npm'i de içerir).
    *   Node.js'i [nodejs.org](https://nodejs.org/) adresinden indirebilirsiniz.
*   **npm** (Node Package Manager): Node.js ile birlikte gelir. `v8.x` veya daha üzeri önerilir.
    *   Alternatif olarak **Yarn** (`v1.22.x` veya daha üzeri) da kullanabilirsiniz.

Kurulu olup olmadıklarını ve versiyonlarını kontrol etmek için terminalinizde aşağıdaki komutları çalıştırabilirsiniz:
```bash
node -v
npm -v
# veya:
yarn --version

