import { defineConfig } from "oxfmt";

export default defineConfig({
  sortTailwindcss: {
    stylesheet: "./app/assets/css/main.css",
    functions: ["clsx", "cn"],
  },
});
