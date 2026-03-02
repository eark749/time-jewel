# Time Jewel Manufacturing

A React web app for Time Jewel Manufacturing — precision jewelry casting. Converted from the original HTML design with Tailwind CSS styling.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for production

```bash
npm run build
```

Output is in the `dist/` folder.

## Contact form / email setup

The contact form sends inquiries to **kailash111111@gmail.com**.

**Option 1 – Formspree (recommended):** Form submissions go straight to your inbox.

1. Sign up at [formspree.io](https://formspree.io) (free).
2. Create a new form and connect it to kailash111111@gmail.com.
3. Copy your form endpoint (e.g. `https://formspree.io/f/xxxxxxxx`).
4. Create a `.env` file in the project root and add:
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   ```
5. Restart the dev server (`npm run dev`).

**Option 2 – Without Formspree:** If you don’t set up Formspree, the form will open the user’s email client with a pre-filled mailto link.

## Tech stack

- React 19
- Vite 7
- Tailwind CSS v4
