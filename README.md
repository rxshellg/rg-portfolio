# Rashell Guerrero's Portfolio

A responsive software engineering portfolio built with React, TypeScript, and Vite. The site presents my projects, technical skills, resume, and contact information through a polished one-page experience focused on clear navigation, accessible UI patterns, and maintainable component structure.

**Live site:** https://rashellguerrero.dev/

## Highlights

* Responsive one-page layout with Hero, About, Projects, Skills, Contact, and Footer sections
* Sticky navigation with active-section tracking using `IntersectionObserver`
* Data-driven project and skills content for easier updates and cleaner component logic
* Interactive project cards with image carousel support and mobile-friendly expandable summaries
* Contact form powered by EmailJS with loading, success, and error states
* Automated tests covering key UI rendering, navigation, resume, and social link behavior
* CI/CD workflow with GitHub Actions for linting, testing, production builds, and Vercel deployment
* Custom UI details including a mobile typewriter effect, pixel-inspired styling, and a canvas-based footer cat animation
* Vercel Analytics integration

## Tech Stack

React, TypeScript, Vite, CSS, EmailJS, Vercel Analytics, React Icons

Testing and tooling: Vitest, React Testing Library, JSDOM, ESLint, GitHub Actions, Vercel

## How to Run Locally

```bash
git clone https://github.com/rxshellg/rg-portfolio.git
cd rg-portfolio
npm ci
npm run dev
```

## Environment Variables

The contact form uses EmailJS. To enable message sending, add the following variables to a local `.env` file and to the project’s Environment Variables settings:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Without these variables, the site will still render, but the contact form will not be able to send messages.

## Screenshots
| Desktop | Mobile |
|---------|--------|
| <img width="1339" height="632" alt="image" src="https://github.com/user-attachments/assets/a62fc6aa-f474-409c-87d4-95253034cdbf" /> | <img width="322" height="624" alt="image" src="https://github.com/user-attachments/assets/31d1468d-7fef-4900-9a5a-affd2097d62b" /> |
| <img width="1337" height="632" alt="image" src="https://github.com/user-attachments/assets/2c7a7634-9245-423f-9f15-46908c45cf6f" /> | <img width="320" height="667" alt="image" src="https://github.com/user-attachments/assets/a833f1d4-3b27-4eeb-8fe0-87e4b9260537" /> |
| <img width="1341" height="626" alt="image" src="https://github.com/user-attachments/assets/78a5eb8f-7181-4bf3-9038-996880757d41" /> | <img width="320" height="679" alt="image" src="https://github.com/user-attachments/assets/e144fcd5-dbf3-4c50-a475-d034ceecaf88" /> |
| <img width="1338" height="632" alt="image" src="https://github.com/user-attachments/assets/02dcd180-e918-4fa1-9683-77a8e1fadc08" /> | <img width="320" height="680" alt="image" src="https://github.com/user-attachments/assets/69591704-8cdf-498c-90f0-72e0da37feb7" /> |
| <img width="1341" height="634" alt="image" src="https://github.com/user-attachments/assets/26e6e027-57c0-43dc-ac2e-a3eb5c2d723d" /> | <img width="320" height="621" alt="image" src="https://github.com/user-attachments/assets/c8e27a44-73c6-4c22-9810-9db7d9376d45" /> |
| <img width="1340" height="235" alt="image" src="https://github.com/user-attachments/assets/24d1825b-e85b-43c7-a01e-70e25bbefda1" /> | <img width="322" height="307" alt="image" src="https://github.com/user-attachments/assets/46ecf5e1-135c-4d80-8bb3-192d42693d75" /> |
