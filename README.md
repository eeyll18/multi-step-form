# Çok Adımlı Etkinlik Kayıt Formu

Bu proje, React, TypeScript ve Vite kullanılarak oluşturulmuş, modern, kullanıcı dostu ve güvenlik odaklı çok adımlı bir etkinlik kayıt formudur. Kullanıcıların bir etkinliğe kaydolurken kişisel bilgilerini, etkinlik tercihlerini ve özel gereksinimlerini adım adım girmelerini sağlar.

<!-- ![Etkinlik Kayıt Formu Ekran Görüntüsü](https://via.placeholder.com/600x400.png?text=Proje+Ekran+Görüntüsü+Buraya)
*(Projenizin bir ekran görüntüsünü buraya ekleyin)* -->

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

