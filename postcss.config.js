import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import nested from "postcss-nested";
import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";

const plugins = [
  // Tailwind CSS framework
  tailwindcss(),

  // Automatically add vendor prefixes
  autoprefixer(),

  // Enable nested CSS syntax
  nested(),

  // Modern CSS features with stage 1 features enabled
  postcssPresetEnv({
    stage: 1,
    features: {
      "custom-properties": true, // Enable CSS variables
    },
  }),
];

// Minify CSS in production for optimized performance
if (process.env.NODE_ENV === "production") {
  plugins.push(
    cssnano({
      preset: "default",
    })
  );
}

export default {
  plugins,
};
