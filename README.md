# Çok Adımlı Etkinlik Kayıt Formu

Bu proje, React, TypeScript ve Vite kullanılarak oluşturulmuş, modern, kullanıcı dostu ve güvenlik odaklı çok adımlı bir etkinlik kayıt formudur. Kullanıcıların bir etkinliğe kaydolurken kişisel bilgilerini, etkinlik tercihlerini ve özel gereksinimlerini adım adım girmelerini sağlar.


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


## Stil ve Kullanıcı Arayüzü

Uygulamanın kullanıcı arayüzü, çok adımlı kayıt formu için sorunsuz bir kullanıcı deneyimi sunmaya odaklanarak modern, responsive olacak şekilde tasarlanmıştır.

### Ana Özellikler:

*   **Duyarlı Tasarım (Responsive Design):**
    *   Düzen, medya sorguları (media queries) kullanılarak çeşitli ekran boyutlarına (masaüstü, tablet ve cep telefonları) akıcı bir şekilde uyum sağlar.
    *   Farklı cihazlarda optimum görüntüleme ve etkileşim sağlamak için `768px`, `600px`, `480px` ve `360px` gibi ana kesme noktaları (breakpoints) tanımlanmıştır; bu noktalarda dolgu (padding), yazı tipi boyutları ve eleman düzenlerinde ayarlamalar yapılır.

*   **Animasyonlar ve Geçişler:**
    *   **Özel Keyframe Animasyonları:** Aşağıdaki gibi özel CSS keyframe animasyonlarını içerir:
        *   `fadeIn`: 
        *   `slideInFromRight/Left`
        *   `pulse`: 
        *   `shake`: 
    *   **Etkileşimli Elemanlar:** Butonlar ve giriş alanları, daha iyi kullanıcı geri bildirimi için üzerine gelme (hover) ve aktif/odaklanma (active/focus) durumlarında geçişlere (örneğin, transform, kutu gölgesi değişiklikleri, gradyan kaymaları) sahiptir.

*   **CSS Özel Özellikleri (Değişkenler - Variables):**
    *   Kapsamlı bir CSS değişken seti (örneğin, `--primary-color`, `--error-color`, `--border-radius`, `--box-shadow`) `:root` seviyesinde tanımlanmıştır.
    *   Bu, kolay tema oluşturma, uygulama genelinde tutarlı stil kullanımı ve renk paleti ile yaygın boyutsal değerlerin daha basit bakımını sağlar.

*   **Gelişmiş Kullanıcı Deneyimi (UX):**
    *   **Net Görsel Hiyerarşi:** Başlıkların, boşlukların, yazı tipi ağırlıklarının ve belirgin bölüm stillerinin uygun kullanımı.
    *   **Giriş Geri Bildirimi:** Giriş alanları odaklandığında belirgin stiller gösterir ve doğrulama hataları için anında görsel geri bildirim (kenarlık rengi, kutu gölgesi, `shake` animasyonu) sağlar. Hata mesajları netlik için özel olarak stillendirilmiştir.
    *   **Etkileşimli İlerleme Çubuğu:** Kullanıcı adımlarda ilerledikçe ilerleme çubuğu dinamik olarak dolar ve mevcut adım belirgin bir şekilde vurgulanır ve bir `pulse` efektiyle canlandırılır.



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

