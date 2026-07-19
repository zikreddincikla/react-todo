<div align="center">

# React To-Do Project

**React ve Vite ile geliştirilmiş, karanlık ve neon vurgulu bir yapılacaklar listesi — bileşen tabanlı, `localStorage` destekli, sıfır backend.**

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No Backend](https://img.shields.io/badge/backend-none-success?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

[Canlı Demo](https://react-todo-gamma-coral.vercel.app/) · [Hata Bildir](https://github.com/zikreddincikla) · [Yazar](https://github.com/zikreddincikla)

[🇬🇧 English](README.md) | 🇹🇷 Türkçe

</div>

---

## Genel Bakış

React To-Do Project, temel React kavramlarını pratik etmek amacıyla geliştirilmiş hafif bir görev yöneticisidir — bileşen kompozisyonu, kontrollü input'lar ve state kalıcılığı üzerine kurulu. Her görev, React state'inde bir `todos` dizisinde tutulur ve her değişiklikte `localStorage`'a yansıtılır; böylece liste, backend, veritabanı veya API çağrısı olmadan sayfa yenilemelerinde ve tarayıcı yeniden başlatmalarında kaybolmaz.

Arayüz, bir CSS Grid sayfa iskeletinin üzerine kurulu karanlık, neon-turkuaz bir estetiğe yaslanıyor ve genelinde hover ile tetiklenen mikro animasyonlar bulunuyor.

> [!TIP]
> Bir Vite projesi olduğu için geliştirme sırasında manuel bir build adımı yok — `npm run dev` size doğrudan hot-reload sağlar.

## Özellikler

- **Görev ekleme** — kontrollü bir form üzerinden, 100 karakterle sınırlı
- **Görev tamamlama** — tek tıkla bir görevin tamamlanma durumu değişir (üstü çizili + soluk stil)
- **Görev silme** — tek tek öğeleri anında kaldırın
- **Kalıcı depolama** — görevler `localStorage`'a kaydedilir, geri döndüğünüzde hâlâ orada olurlar
- **Bileşen tabanlı arayüz** — `Header`, `Footer` ve `Todo`, izole ve yeniden kullanılabilir bileşenlerdir
- **Duyarlılık göz önünde bulundurularak tasarlanmış yerleşim** — her bölgenin içinde Flexbox olan `header / main / footer` CSS Grid iskeleti
- **Neon karanlık tema** — hover'da `box-shadow` ışıması olan turkuaz vurgulu butonlar ve kartlar
- **Header'da sosyal medya linkleri** — yazarın GitHub ve LinkedIn'ine hızlı erişim
- **SEO'ya hazır markup** — link önizlemeleri için Open Graph ve Twitter Card meta etiketleri zaten bağlanmış

## Teknoloji Yığını

| Katman | Teknoloji | Notlar |
|---|---|---|
| Kütüphane | React 19 | Fonksiyon bileşenleri, `useState`, `useEffect` |
| Build aracı | Vite 8 | Geliştirme sunucusu + production bundling, build'de sourcemap'ler devre dışı |
| Linting | oxlint | `react` + `oxc` eklentileri, `rules-of-hooks` hata olarak zorunlu kılınmış |
| Stil | CSS3 | CSS Grid + Flexbox, CSS framework kullanılmıyor |
| Kalıcılık | `localStorage` | Backend yok, veritabanı yok |
| Paket yöneticisi | npm | — |

## Başlarken

```bash
git clone https://github.com/zikreddincikla/react-todo.git
cd react-todo
npm install
npm run dev
```

Geliştirme sunucusu varsayılan olarak `http://localhost:5173` adresinde çalışır.

```bash
npm run build     # production build (dist/)
npm run preview   # production build'i yerel olarak önizle
npm run lint       # oxlint çalıştır
```

<details>
<summary><b>Proje yapısı</b></summary>

```
react-todo/
├── component/
│   ├── Footer/
│   │   ├── Footer.css
│   │   └── Footer.jsx
│   └── Header/
│       ├── Header.css
│       └── Header.jsx
├── image/
│   ├── icon.ico         # Favicon
│   └── image.png        # Sosyal medya önizleme kartı görseli
├── public/
│   └── icons.svg
├── src/
│   ├── App.css          # Ana stiller
│   ├── App.jsx          # Kök bileşen ve ana state mantığı
│   ├── index.css        # Genel CSS resetleri
│   ├── main.jsx         # Vite giriş noktası
│   └── Todo.jsx         # Modüler Todo öğe bileşeni
├── index.html           # Meta etiketler, SEO ve viewport ayarları
├── package.json         # Script'ler ve bağımlılıklar
└── vite.config.js       # Vite build konfigürasyonları
```

</details>

<details>
<summary><b>Kalıcılık nasıl çalışıyor</b></summary>

`App.jsx`, ilk render'da `localStorage`'daki `todos` anahtarını okuyarak `todos` state'ini başlatır[^1]. Sonraki her değişiklik — ekleme, silme veya durum değiştirme — bu state dizisini günceller ve bir `useEffect` hook'u tüm diziyi JSON olarak `localStorage`'a geri yazar. Gördüğünüz görev listesi her zaman state'in doğrudan bir yansımasıdır ve state her zaman depoyla senkronize tutulur — tam tersi değil.

[^1]: Bu, tarayıcınızın site verilerini temizlemenin yapılacaklar listenizi de sileceği anlamına gelir — şu an bulut senkronizasyonu ya da dışa aktarma seçeneği bulunmuyor.

</details>

## Yazar

**Zikreddin** tarafından geliştirildi ve sürdürülüyor.

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/zikreddincikla)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/zikreddin-%C3%A7%C4%B1klasa%C4%9F%C4%B1rc%C4%B1o%C4%9Flu-64667a395/)

## Lisans

MIT Lisansı altında dağıtılmaktadır. Detaylar için `LICENSE` dosyasına bakın.

---

<div align="center">

© 2026 Zikreddin — Tüm hakları saklıdır.

</div>