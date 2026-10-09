# Lahari Kandukuri — Personal Portfolio Website

A clean, responsive, student-developed personal portfolio website for **Lahari Kandukuri**, a Computer Science and Engineering undergraduate student at **Ashoka Women's Engineering College, Kurnool**.

Built with pure **HTML5, CSS3, and vanilla JavaScript** (no external frameworks or build steps required).

---

## 📁 Project Directory Structure

```text
LahariPortfolio/
├── index.html                  # Main website markup
├── style.css                   # Custom styles (navy, white, and light-blue palette)
├── script.js                   # Navigation toggle, resume handling & form validation
├── README.md                   # Setup guide and instructions
└── assets/
    ├── profile-placeholder.svg # Default avatar placeholder
    ├── profile.jpg             # (Place your photo here)
    ├── resume.pdf              # (Place your resume PDF here)
    └── certifications/         # (Place your certificate files/images here)
```

---

## 🚀 How to Preview the Website in Your Browser

You **do not need GitHub, Node.js, or any server** to run this website locally on your computer.

### Method 1: Double-Click (Easiest)
1. Open the `LahariPortfolio` folder in File Explorer.
2. Double-click `index.html`.
3. It will open instantly in your default web browser (Chrome, Edge, Firefox, Brave, etc.).

### Method 2: Using VS Code Live Server (Recommended for Live Editing)
1. Open the `LahariPortfolio` folder in **Visual Studio Code**.
2. If you have the **Live Server** extension installed:
   - Right-click `index.html` and click **"Open with Live Server"**.
3. Any changes you make to the code will refresh automatically in the browser.

### Method 3: Using Python Built-in Server (Optional)
If you have Python installed, open PowerShell inside this folder and run:
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 📸 Where to Put Your Files & Update Placeholders

### 1. Profile Photo
- Save your profile picture as **`profile.jpg`** or **`profile.png`**.
- Copy it into the `assets/` folder:
  `LahariPortfolio/assets/profile.jpg`
- The website script will automatically detect and display your photo in place of the default avatar placeholder!

### 2. Resume PDF
- Name your resume file **`resume.pdf`**.
- Save it inside the `assets/` folder:
  `LahariPortfolio/assets/resume.pdf`
- When someone clicks the **"Download Resume"** button, your PDF will download automatically. If the file is not yet added, the website shows a polite notice instead of a broken 404 page.

### 3. Certificates
- Place your certificate PDFs or image files inside `assets/certifications/`.
  Example: `assets/certifications/wipro-python.pdf`
- In `index.html`, locate the `<!-- CERTIFICATIONS SECTION -->` and uncomment or add certificate cards with your certificate name, issuing organization, and completion date.

### 4. Contact Details & Social Profiles (Configured)
The contact section is already configured with your verified details:
- **Email:** `kandiukurilahari6301@gmail.com`
- **Phone:** `+91 6301145385`
- **LinkedIn:** `https://www.linkedin.com/in/lahari-kandukuri-005174306`
- **GitHub:** `https://github.com/Kandikurilahari`

### 5. Education & Scores (Configured)
Your scores are set according to your verified resume:
- **B.Tech CSE:** CGPA 7.85 (Ongoing)
- **Intermediate MPC:** CGPA 6.54 (65.4%)
- **SSC:** CGPA 9.07 (90.6%)

---

## 🎨 Design & Code Highlights

- **Palette:** Deep Navy (`#0f172a`), Slate Blue (`#1e293b`), and Sky Blue accent (`#0284c7`).
- **Responsive:** Optimized for smartphones, tablets, laptops, and wide screens.
- **Accessible:** Semantic HTML5 landmarks, accessible ARIA attributes, and clear form labels.
- **Truthful & Realistic:** Represents genuine student coursework, skills, and internship experience without exaggerated claims or fake testimonials.
- **Client-Side Form Validation:** Validates contact inputs locally and offers a direct `mailto:` shortcut for static hosting.
