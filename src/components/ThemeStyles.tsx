import React, { useContext } from "react";
import Color from "color";
import { ConfigContext, defaultConfig } from "../config";

function ThemeStyles() {
  const config = useContext(ConfigContext);

  if (!config) {
    throw new Error("ThemeStyles component must a child of ConfigContext");
  }

  let color: Color;
  try {
    color = Color(config.theme);
  } catch (e) {
    color = Color(defaultConfig.theme);
  }

  return (
    <style global jsx>{`
      :root {
        --theme-color: ${color.hex().toString()};
        --theme-color-dark: ${color.darken(0.2).hex().toString()};
        --theme-color-light: ${color.lighten(0.2).hex().toString()};
      }

      .text-theme-color {
        color: var(--theme-color);
      }
      .text-theme-color-dark {
        color: var(--theme-color-dark);
      }
      .text-theme-color-light {
        color: var(--theme-color-light);
      }

      .bg-theme-color {
        background-color: var(--theme-color);
      }
      .bg-theme-color-dark {
        background-color: var(--theme-color-dark);
      }
      .bg-theme-color-light {
        background-color: var(--theme-color-light);
      }
    `}</style>
  );
}

export { ThemeStyles };
