import type { Preview } from "@storybook/react";
// A mesma folha que os apps carregam — é ela que dá sentido aos componentes.
import "./preview.css";

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: { disable: true },
  },
  // Claro e escuro no mesmo botão: o padrão tem os dois, e regressão de tema
  // é o tipo de coisa que só aparece quando alguém troca.
  globalTypes: {
    tema: {
      description: "Tema",
      defaultValue: "light",
      toolbar: {
        title: "Tema",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Claro" },
          { value: "dark", title: "Escuro" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, contexto) => {
      const escuro = contexto.globals.tema === "dark";
      document.documentElement.classList.toggle("dark", escuro);
      document.body.style.background = escuro ? "#070707" : "#ffffff";
      return Story();
    },
  ],
};

export default preview;
