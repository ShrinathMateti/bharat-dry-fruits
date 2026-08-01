import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0F382C", // Deep Emerald Green
          foreground: "#FAF6F0",
        },
        maroon: {
          DEFAULT: "#5C061C", // Royal Maroon
          foreground: "#FAF6F0",
        },
        secondary: {
          DEFAULT: "#5C061C",
          foreground: "#FAF6F0",
        },
        accent: {
          DEFAULT: "#D4AF37", // Saffron Gold
          foreground: "#0F382C",
        },
        honey: {
          DEFAULT: "#F39C12", // Honey Gold
          foreground: "#1A1A1A",
        },
        ivory: "#FAF6F0",
        charcoal: "#1A1A1A",
        muted: {
          DEFAULT: "#F1EAE0",
          foreground: "#666666",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
        },
        destructive: {
          DEFAULT: "#5C061C",
          foreground: "#FAF6F0",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gold-shimmer":
          "linear-gradient(120deg, #D4AF37 0%, #F5D67B 25%, #D4AF37 50%, #F39C12 75%, #D4AF37 100%)",
        "emerald-radial":
          "radial-gradient(circle at top, #144C3B 0%, #0F382C 60%, #0A2A20 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
