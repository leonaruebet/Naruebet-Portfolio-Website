import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
        },
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#0F172A',
        },
        foreground: {
          DEFAULT: '#1F2937',
          dark: '#F8FAFC',
        },
        card: {
          DEFAULT: '#F9FAFB',
          dark: '#1E293B',
        },
        'card-foreground': {
          DEFAULT: '#1F2937',
          dark: '#F8FAFC',
        },
        border: {
          DEFAULT: '#E5E7EB',
          dark: '#2D3748',
        },
        ring: {
          DEFAULT: '#E5E7EB',
          dark: '#2D3748',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-in': 'slide-in 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
