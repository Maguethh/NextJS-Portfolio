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

      addUtilities(newUtilities, ["responsive", "hover"]);
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
