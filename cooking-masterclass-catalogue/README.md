# 🍳 Cooking Masterclass Catalogue

A responsive Vue.js single-page application showcasing cooking masterclass courses. Users can browse available classes, filter by availability, and save their favorites to a wishlist.

---

## 📖 Project Overview

Cooking Masterclass is an online platform that curates cooking workshops hosted by expert chefs. This catalogue prototype allows users to:

- Browse a collection of cooking classes displayed as cards
- View class details including title, chef, price, and skill level
- Filter courses by availability (**All**, **Available**, **Sold Out**)
- Save courses to a wishlist with live counter updates
- See clear availability status for each course
- Experience smooth animations and hover effects

---

## 🛠️ Tech Stack

- **Vue 3** – Progressive JavaScript framework
- **Vuex 4** – State management for wishlist functionality
- **Vite** – Build tool and development server

---

## ✨ Features

- Responsive course cards
- Wishlist functionality with animated counter
- Sold-out indication for unavailable courses
- Filtering system:
  - All Classes
  - Available
  - Sold Out
- Price formatting with currency display
- Responsive layout for desktop and mobile devices
- Hover animations and interactive elements

---

## 💻 Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- [Vue (Official) Extension (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

> Disable Vetur if it is installed.

---

## 🚀 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/cooking-masterclass-catalogue.git
```

### 2. Navigate to the Project Directory

```bash
cd cooking-masterclass-catalogue
```

### 3. Install Dependencies

```bash
npm install
```

---

## 🔥 Compile and Hot-Reload for Development

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## 📦 Compile and Minify for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

---

## 📁 Project Structure

```text
cooking-masterclass-catalogue/
├── src/
│   ├── components/
│   │   ├── Header.vue          # Navigation header with wishlist counter
│   │   └── CourseCard.vue      # Individual course display card
│   ├── data/
│   │   └── courses.js          # Course data with images and details
│   ├── stores/
│   │   └── index.js            # Vuex store for wishlist state
│   ├── App.vue                 # Root component with filtering
│   └── main.js                 # Application entry point
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
└── package.json                # Project dependencies
```

---

## 📋 Usage

1. Browse the catalogue of cooking classes on the main page.
2. Use the filter buttons to display:
   - All Classes
   - Available Classes
   - Sold Out Classes
3. Click **SAVE CLASS** on any available course to add it to your wishlist.
4. Click **SAVED** to remove a course from your wishlist.
5. The wishlist counter in the header updates automatically.
6. Sold-out courses display a clear indicator and cannot be saved.

---

## 📸 Screenshot

![Cooking Masterclass Catalogue](https://i.ibb.co/Sw5kGLmB/localhost-5173.png)

---

## 🎯 Learning Objectives

This project demonstrates:

- Vue 3 component-based architecture
- State management with Vuex
- Reactive data handling
- Event-driven user interactions
- Conditional rendering
- List rendering with `v-for`
- Responsive UI design
- Modern frontend development with Vite
