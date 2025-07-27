# 🛍️ Products Gallery Web Application 'React TypeScript'

A fully responsive and interactive e-commerce Products Gallery built using React, Tailwind CSS, and TypeScript. The application allows users to browse, filter, sort, and view product details, with a modern UI and seamless experience across all devices.

---


## 🚀 Live Demo

[🔗 Click here to view the live demo](https://job-fair-task-lrbq.vercel.app/)

---



## 🧰 Tech Stack

- **Framework:** React (v18+)
- **Styling:** Tailwind CSS
- **Login:** TypeScript
- **API:** Fake Store API
- **Routing:** React Router DOM
- **Dark Mode:** `react-toggle-dark-mode` + Tailwind's dark class
- **State Management:** useState, useEffect
- **Optional Enhancements:** Dark mode toggle, Product ratings display

---

## ✨ Features

### ✅ Products Page
- 📦 Fetches data from the Fake Store API
- 🎴 Displays products in responsive cards
- 🔍 Filter by product name (case-insensitive)
- 🔽 Sort by:
  - Price (Low to High / High to Low)
  - Name (A–Z)
- 📱 Fully responsive layout
- ⏳ Loading indicators & empty state handling

### ✅ Product Details Page
- 🔗 Dynamic route: `/products/:id`
- 🖼 Full product image, name, description, price, category
- ⭐ Rating display

### ✅ Dark Mode Toggle
- Light/dark theme switch with persistent user preference

### 🔄 Error Handling
- Displays fallback UI on API failure

---

## 📦 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/products-gallery-app.git
cd products-gallery-app
