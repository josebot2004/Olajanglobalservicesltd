/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A8A", // Deep corporate blue
          light: "#2563EB",   // Accent / hover blue
          dark: "#0F172A",    // Navy for strong emphasis
          tint: "#93C5FD",    // Soft blue background tint
        },
        secondary: {
          DEFAULT: "#FACC15", // Golden yellow highlight
          light: "#FDE047",   // Bright yellow for accents
          dark: "#CA8A04",    // Deep gold for contrast
          tint: "#FEF9C3",    // Soft pale yellow
        },
        neutral: {
          DEFAULT: "#111827",    // Rich dark gray (main text)
          light: "#6B7280",      // Muted gray (secondary text)
          lighter: "#D1D5DB",    // Borders / subtle UI lines
          background: "#F9FAFB", // Page background
          surface: "#1F2937",    // Footer / dark sections
        },
        accent: {
          green: "#10B981",   // Eco / success
          orange: "#F97316",  // Warnings / highlights
          red: "#EF4444",     // Errors / alerts
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"], // Modern clean font
        heading: ["Roboto", "sans-serif"], // Strong heading font
      },
    },
  },
  plugins: [],
}
