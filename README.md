# Personal Portfolio Website

This template provides a minimal, high-performance setup to get React working in Vite with Hot Module Replacement (HMR).

## Live Demo
🔗 **[https://ditaa99.github.io/portfolio/](https://ditaa99.github.io/portfolio/)**

---

## Tech Stack & Architecture

- **Frontend Core:** React, HTML5, CSS3 (Modern Flexbox/Grid layouts)
- **Build Tool:** Vite (Fast development server with HMR)
- **UI Framework:** Bootstrap 5 (Customized overrides for consistent color tokens)
- **Icons:** React Icons (`fa` FontAwesome, `bs` Bootstrap Icons)
- **Animations:** AOS (Animate On Scroll) library
- **Data Management:** Fully decoupled architecture using a centralized dynamic data repository (`src/data/`) for effortless scaling and maintenance.

---

## Project Structure

```text
src/
├── components/   # jsx components
├── data/         # .js files for cleaner cards
├── assets/       # attachments - images, pdfs
├── theme.js      # Unified React Context API for global theme switching
├── index.css     # Custom CSS architecture (Design system tokens, custom cards)
├── App.jsx       # Logical sequential layout pipeline
└── main.jsx      # Application entry mounting script
```

---

## Getting Started (Local Development)

Follow these steps to spin up the portfolio site in your local development workspace:

### 1. Clone the Repository

```bash
git clone https://github.com/ditaa99/portfolio.git
cd portfolio

```

### 2. Install Project Dependencies

```bash
npm install

```

### 3. Launch the Local Development Server

```bash
npm run dev

```

Open your browser and navigate to `http://localhost:5173` (or the fallback local terminal port provided by Vite).

### 4. Compiling a Production Build

To export a highly minified, chunk-optimized static bundle ready for deployment:

```bash
npm run build

```