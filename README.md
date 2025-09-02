# 🚀 Space App

A multi-page responsive space exploration website built with **Next.js 15**, **React 19**, **Tailwind CSS 4**, and **TypeScript**.  
This project was created to practice building interactive UIs, handling dynamic data with state, and implementing responsive layouts.

---

## ✨ Features

- 📱 **Responsive Design** – optimized layouts for mobile, tablet, and desktop.  
- 🖼️ **Dynamic Backgrounds** – page-specific images that adapt to screen size.  
- 🔄 **Tab Navigation** – switch between planets, crew, and technologies dynamically.  
- 🍔 **Hamburger Menu** – mobile navigation with animated open/close.  
- 🎨 **Tailwind Styling** – clean, utility-first CSS with custom responsive rules.  
- 🛠️ **TypeScript Support** – strong typing for data models (planets, crew, technologies).  
- ✅ **Linting** – ESLint configured with Next.js + TypeScript rules.

---

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) – React framework  
- [React 19](https://react.dev/) – UI library  
- [Tailwind CSS 4](https://tailwindcss.com/) – styling  
- [TypeScript](https://www.typescriptlang.org/) – static typing  
- [ESLint](https://eslint.org/) – code linting  

---

## 📂 Project Structure

```plaintext

space-app/
│── app/
│ ├── home/page.tsx # Home page
│ ├── destination/page.tsx # Planet selection
│ ├── crew/page.tsx # Crew profiles
│ ├── technology/page.tsx # Technologies
│ ├── layout.tsx # Root layout (with backgrounds)
│ └── globals.css # Global styles
│
│── components/
│ ├── header.tsx # Logo + navigation wrapper
│ ├── headerLinks.tsx # Desktop + mobile nav
│
│── public/assets/ # Images
│── eslint.config.mjs # ESLint setup
│── package.json
│── README.md

```

---

## 🚀 Installation

First, clone the repository and install dependencies:

``` bash
git clone <https://github.com/Theezigner/space-app.git>
cd <space-app>
pnpm install

```

Run the development server:

``` bash
pnpm run dev

```

The app should now be running on <http://localhost:3000>.

---

## 🚦 Usage

- Home → Hero section with "Explore" button.
- Destination → Pick a planet to see details.
- Crew → Learn about different crew members.
- Technology → Explore space technologies (switch images per screen size).

---

## 💡 Code Highlights

### Background Switching in layout.tsx

``` tsx
const pageBackgrounds: Record<string, string> = {
  "/": `
    lg:bg-[url('/assets/home/background-home-desktop.jpg')] 
    md:bg-[url('/assets/home/background-home-tablet.jpg')] 
    bg-[url('/assets/home/background-home-mobile.jpg')]
  `,
  // other pages...
};

const bgClass = pageBackgrounds[pathname] ?? "bg-black";

<body className={`min-h-screen ${bgClass} bg-cover bg-no-repeat text-white`}>
  <Header />
  {children}
</body>
```

### Tab Navigation Example (Crew Page)

``` tsx
{crews.map((crew) => (
  <button
    key={crew.name}
    onClick={() => setSelectedCrew(crew.name)}
    className={`w-2 h-2 rounded-full ${
      selectedCrew === crew.name ? "bg-white" : "bg-gray-400"
    }`}
  />
))}
```

## 🚀 Future Improvements

- Add animations for smoother transitions.
- Fetch data from an API instead of hardcoding arrays.
- Add testing with Jest/React Testing Library.
- Deploy on Vercel for live hosting.

---

## Live links
- **Live Demo**: [Live Demo](https://space-app-seven-rouge.vercel.app/)
- **GitHub**: [GitHub Link](https://github.com/Theezigner/space-app.git)

---

## 👨‍💻 Author
-  Temitayo Adebayo
- **Portfolio**: [Theezigner](https://theezigner-porfolio.vercel.app/)
