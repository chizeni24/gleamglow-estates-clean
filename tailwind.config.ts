import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(45 30% 75%)',
        input: 'hsl(45 30% 90%)',
        ring: 'hsl(45 40% 50%)',
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(222.2 84% 4.9%)',
        gold: { 
          light: '#F5EDD1', 
          DEFAULT: '#D4AF37', 
          dark: '#9C7C38',
          lighter: '#F5EDD1',
          accent: '#F0E6C0'
        },
        cream: {
          light: '#FFF8E9',
          DEFAULT: '#F9F3E3',
          dark: '#EFE9D9'
        },
        offWhite: '#FFFFFF',
        charcoal: '#1A1A1A',
        primary: {
          DEFAULT: 'hsl(47 62% 52%)',
          foreground: 'hsl(0 0% 100%)'
        },
        secondary: {
          DEFAULT: 'hsl(45 45% 92%)',
          foreground: 'hsl(222.2 47.4% 11.2%)'
        },
        destructive: {
          DEFAULT: 'hsl(0 84.2% 60.2%)',
          foreground: 'hsl(0 0% 98%)'
        },
        muted: {
          DEFAULT: 'hsl(45 30% 96%)',
          foreground: 'hsl(45 10% 40%)'
        },
        accent: {
          DEFAULT: 'hsl(45 45% 85%)',
          foreground: 'hsl(45 30% 20%)'
        },
        popover: {
          DEFAULT: 'hsl(0 0% 100%)',
          foreground: 'hsl(222.2 84% 4.9%)'
        },
        card: {
          DEFAULT: 'hsl(0 0% 100%)',
          foreground: 'hsl(222.2 84% 4.9%)'
        },
        sidebar: {
          DEFAULT: 'hsl(0 0% 98%)',
          foreground: 'hsl(240 5.3% 26.1%)',
          primary: 'hsl(240 5.9% 10%)',
          'primary-foreground': 'hsl(0 0% 98%)',
          accent: 'hsl(240 4.8% 95.9%)',
          'accent-foreground': 'hsl(240 5.9% 10%)',
          border: 'hsl(45 30% 75%)',
          ring: 'hsl(45 40% 50%)'
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(212, 175, 55, 0)' },
        },
        'shine': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'bounce-sm': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 5px 0 rgba(235, 210, 125, 0.5)' },
          '50%': { boxShadow: '0 0 20px 10px rgba(235, 210, 125, 0.3)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '100%': { backgroundPosition: '200% center' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0', transform: 'scale(0.5)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'gold-shine': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'pulse-gold': 'pulse-gold 2s infinite',
        'shine': 'shine 3s linear infinite',
        'bounce-sm': 'bounce-sm 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'gold-shine': 'gold-shine 3s ease infinite',
      },
      blur: {
        '4xl': '100px',
        '5xl': '120px',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
