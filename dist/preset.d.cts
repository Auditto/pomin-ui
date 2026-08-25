declare const preset: {
    darkMode: string[];
    prefix: string;
    theme: {
        container: {
            center: boolean;
            padding: string;
            screens: {
                "2xl": string;
            };
        };
        extend: {
            fontFamily: {
                sans: string[];
                display: string[];
            };
            colors: {
                border: string;
                input: string;
                ring: string;
                background: string;
                foreground: string;
                primary: {
                    DEFAULT: string;
                    foreground: string;
                    glow: string;
                };
                secondary: {
                    DEFAULT: string;
                    foreground: string;
                };
                destructive: {
                    DEFAULT: string;
                    foreground: string;
                };
                success: {
                    DEFAULT: string;
                    foreground: string;
                };
                warning: {
                    DEFAULT: string;
                    foreground: string;
                };
                info: string;
                neutral: string;
                idle: string;
                hub: {
                    blue: string;
                    "blue-soft": string;
                    amber: string;
                    emerald: string;
                    indigo: string;
                    rose: string;
                };
                muted: {
                    DEFAULT: string;
                    foreground: string;
                };
                accent: {
                    DEFAULT: string;
                    foreground: string;
                };
                popover: {
                    DEFAULT: string;
                    foreground: string;
                };
                card: {
                    DEFAULT: string;
                    foreground: string;
                };
                status: {
                    blocked: string;
                    neutral: string;
                    idle: string;
                    productive: string;
                    break: string;
                    unproductive: string;
                    undefined: string;
                };
                header: {
                    DEFAULT: string;
                    foreground: string;
                };
                sidebar: {
                    DEFAULT: string;
                    foreground: string;
                    primary: string;
                    "primary-foreground": string;
                    accent: string;
                    "accent-foreground": string;
                    border: string;
                    ring: string;
                };
            };
            borderRadius: {
                lg: string;
                md: string;
                sm: string;
                xl: string;
                "2xl": string;
                "3xl": string;
            };
            transitionTimingFunction: {
                hub: string;
            };
            keyframes: {
                "accordion-down": {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
                "accordion-up": {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
                "fade-in": {
                    from: {
                        opacity: string;
                        transform: string;
                    };
                    to: {
                        opacity: string;
                        transform: string;
                    };
                };
                shimmer: {
                    "100%": {
                        transform: string;
                    };
                };
                "fade-in-up": {
                    from: {
                        opacity: string;
                        transform: string;
                    };
                    to: {
                        opacity: string;
                        transform: string;
                    };
                };
                "scale-in": {
                    from: {
                        opacity: string;
                        transform: string;
                    };
                    to: {
                        opacity: string;
                        transform: string;
                    };
                };
                float: {
                    "0%, 100%": {
                        transform: string;
                    };
                    "50%": {
                        transform: string;
                    };
                };
                pulse: {
                    "0%, 100%": {
                        opacity: string;
                    };
                    "50%": {
                        opacity: string;
                    };
                };
                "caret-blink": {
                    "0%, 70%, 100%": {
                        opacity: string;
                    };
                    "20%, 50%": {
                        opacity: string;
                    };
                };
            };
            animation: {
                "accordion-down": string;
                "accordion-up": string;
                "fade-in": string;
                shimmer: string;
                "fade-in-up": string;
                "scale-in": string;
                float: string;
                pulse: string;
                "caret-blink": string;
            };
            boxShadow: {
                "premium-sm": string;
                "premium-md": string;
                "premium-lg": string;
                "premium-xl": string;
                "glass-sm": string;
                "glass-md": string;
                inset: string;
                "glow-primary": string;
            };
            screens: {
                "3xl": string;
            };
        };
    };
    plugins: {
        handler: () => void;
    }[];
};

export { preset as default };
