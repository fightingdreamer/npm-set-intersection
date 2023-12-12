import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/set/intersection.ts"),
      name: "@fightingdreamer/set-intersection",
      formats: ["es", "cjs"],
      fileName: "set-intersection",
    },
    rollupOptions: {
      external: /@fightingdreamer[/].*/,
    },
  },
});
