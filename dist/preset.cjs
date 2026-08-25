"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var preset_exports = {};
__export(preset_exports, {
  default: () => preset_default
});
module.exports = __toCommonJS(preset_exports);
var import_tailwindcss_animate = __toESM(require("tailwindcss-animate"), 1);
const preset = {
  darkMode: ["class"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        sans: ["Oxanium", "system-ui", "-apple-system", "sans-serif"],
        display: ["Oxanium", "system-ui", "sans-serif"]
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))"
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))"
        },
        info: "hsl(var(--info))",
        neutral: "hsl(var(--neutral))",
        idle: "hsl(var(--idle))",
        hub: {
          blue: "hsl(var(--hub-blue))",
          "blue-soft": "hsl(var(--hub-blue-soft))",
          amber: "hsl(var(--hub-amber))",
          emerald: "hsl(var(--hub-emerald))",
          indigo: "hsl(var(--hub-indigo))",
          rose: "hsl(var(--hub-rose))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        status: {
          blocked: "hsl(var(--status-blocked))",
          neutral: "hsl(var(--status-neutral))",
          idle: "hsl(var(--status-idle))",
          productive: "hsl(var(--status-productive))",
          break: "hsl(var(--status-break))",
          unproductive: "hsl(var(--status-unproductive))",
          undefined: "hsl(var(--status-undefined))"
        },
        header: {
          DEFAULT: "hsl(var(--header-bg))",
          foreground: "hsl(var(--header-foreground))"
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "var(--radius)",
        sm: "calc(var(--radius) - 1px)",
        xl: "var(--radius)",
        "2xl": "6px",
        "3xl": "8px"
      },
      transitionTimingFunction: {
        hub: "cubic-bezier(0.32, 0.72, 0, 1)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)"
          }
        },
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(10px)"
          },
          to: {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "scale-in": {
          from: {
            opacity: "0",
            transform: "scale(0.95)"
          },
          to: {
            opacity: "1",
            transform: "scale(1)"
          }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" }
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        },
        "caret-blink": {
          "0%, 70%, 100%": { opacity: "1" },
          "20%, 50%": { opacity: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        shimmer: "shimmer 2s infinite",
        "fade-in-up": "fade-in-up 0.4s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "caret-blink": "caret-blink 1.25s ease-out infinite"
      },
      boxShadow: {
        "premium-sm": "0 1px 2px 0 hsl(215 25% 14% / 0.04)",
        "premium-md": "0 4px 12px -8px hsl(215 25% 14% / 0.16)",
        "premium-lg": "0 10px 24px -18px hsl(215 25% 14% / 0.20)",
        "premium-xl": "0 14px 30px -22px hsl(215 25% 14% / 0.22)",
        "glass-sm": "0 1px 2px 0 hsl(215 25% 14% / 0.04)",
        "glass-md": "0 4px 12px -8px hsl(215 25% 14% / 0.16)",
        inset: "inset 0 1px 2px 0 hsl(0 0% 0% / 0.05)",
        "glow-primary": "0 0 20px -5px hsl(var(--primary) / 0.5)"
      },
      screens: {
        "3xl": "1920px"
      }
    }
  },
  plugins: [import_tailwindcss_animate.default]
};
var preset_default = preset;
//# sourceMappingURL=preset.cjs.map