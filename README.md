# 🚀 Personal Portfolio Website

A clean, modern, dark-themed personal portfolio built with **HTML5**, **CSS3**, **JavaScript**, and **Bootstrap 5**.

---

## 📁 Folder Structure

```
portfolio/
├── index.html          ← Main HTML file (all sections)
├── css/
│   └── style.css       ← All custom styles, animations, responsive
├── js/
│   └── main.js         ← Navbar, cursor, filter, form, counters
├── assets/             ← Put your profile photo and project images here
│   └── profile.jpg     ← (add your own photo)
└── README.md
```

---

## ✅ Features

| Feature | Description |
|---|---|
| Custom Cursor | Yellow dot cursor with blend-mode effect |
| Navbar | Sticky, scrolls to solid on scroll, hamburger on mobile |
| Hero | Typing effect, animated name, social links |
| About | Animated stat counters (JS) |
| Skills | Animated progress bars on scroll |
| Projects | Filter by category (HTML/CSS / JS / Bootstrap) |
| Contact | Form with JS validation + success message |
| Responsive | Mobile-friendly at all breakpoints |
| Smooth Scroll | All anchor links scroll smoothly |
| Reveal Animations | Elements fade in as you scroll |

---

## 🛠 How to Customize

### 1. Replace your name & info
Open `index.html` and replace:
- `YOUR FULL NAME` → your real name
- `Your Name` → your real name  
- `youremail@gmail.com` → your email
- `your-username` → your GitHub username
- `your-profile` → your LinkedIn username

### 2. Add your photo
- Put your photo in `assets/profile.jpg`
- In `index.html`, find `.img-placeholder` and replace:
```html
<div class="img-placeholder">
  <i class="bi bi-person-fill"></i>
</div>
```
with:
```html
<div class="img-placeholder">
  <img src="assets/profile.jpg" alt="Your Name" />
</div>
```

### 3. Add/update projects
Copy any `.project-card` block in `index.html` and update:
- `data-category` → `html-css`, `javascript`, `bootstrap` (space-separated)
- Icon, title, description, tags, GitHub/demo links

### 4. Update skills
Change `data-width="90"` values in each `.skill-card` to reflect your real skill %

### 5. Change color theme
In `css/style.css`, edit these CSS variables at the top:
```css
:root {
  --accent: #e8ff47;   /* Change this to any color you like */
  --accent2: #ff6b35;
}
```

---

## 🌐 How to Run

Just open `index.html` in your browser — no server needed!

For best results, use **VS Code** with the **Live Server** extension.

---

## 📦 Tech Stack

- HTML5 (semantic structure)
- CSS3 (flexbox, grid, custom properties, animations)
- JavaScript (DOM, IntersectionObserver, form validation)
- Bootstrap 5 (grid, responsive utilities)
- Bootstrap Icons
- Google Fonts (Syne + Space Mono)
