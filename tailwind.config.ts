import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Ajouté ici
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customBlue: "#1E3A8A",
        customIndigo: "#6366F1",
        customViolet: "#8B5CF6",
        customBlack: "#000000",
        customWhite: "#FFFFFF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "infinite-scroll": "scroll 20s linear infinite", // Ajouté ici
        marquee: "marquee var(--duration) linear infinite", // Ajouté ici
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite", // Ajouté ici
        scroll2:
          "scroll2 var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite", // Ajouté ici
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee: {
          from: { transform: "translateX(0)" }, // Ajouté ici
          to: { transform: "translateX(calc(-100% - var(--gap)))" }, // Ajouté ici
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" }, // Ajouté ici
          to: { transform: "translateY(calc(-100% - var(--gap)))" }, // Ajouté ici
        },
        scroll2: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    plugin(function ({ addUtilities }: PluginAPI) {
      const newUtilities: { [key: string]: { [key: string]: string } } = {};

      // Width percentage
      for (let i = 10; i <= 100; i += 5) {
        newUtilities[`.w-${i}pc`] = {
          width: `${i}%`,
        };
      }

      // Height percentage
      for (let i = 10; i <= 100; i += 5) {
        newUtilities[`.h-${i}pc`] = {
          height: `${i}%`,
        };
      }

      // Font Size
      for (let i = 10; i <= 46; i += 1) {
        newUtilities[`.fs-${i}px`] = {
          fontSize: `${i}px`,
        };
      }

      // Font Weight
      for (let i = 100; i <= 900; i += 100) {
        newUtilities[`.fw-${i}`] = {
          fontWeight: `${i}`,
        };
      }

      // Padding
      for (let i = 0; i <= 50; i += 5) {
        newUtilities[`.p-${i}px`] = {
          padding: `${i}px`,
        };
      }

      // Margin
      for (let i = 0; i <= 50; i += 5) {
        newUtilities[`.m-${i}px`] = {
          margin: `${i}px`,
        };
      }

      // Border Radius
      for (let i = 0; i <= 50; i += 5) {
        newUtilities[`.rounded-${i}px`] = {
          borderRadius: `${i}px`,
        };
      }

      // Gap
      for (let i = 0; i <= 50; i += 5) {
        newUtilities[`.gap-${i}px`] = {
          gap: `${i}px`,
        };
      }

      addUtilities(newUtilities);
    }),
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
