import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { setDefaultResultOrder } from "dns";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";

setDefaultResultOrder("verbatim");

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    plugins: [react(), svgr({ include: "**/*.svg" })],
    resolve: {
      alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
      extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".svg"],
    },
    server: {
      proxy: { "/api": env.VITE_SERVER_URL },
    },
  });
};
