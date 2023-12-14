import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path, {resolve} from "path";

const srcPath = path.resolve(__dirname, "./src/");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find: "@", replacement: resolve(srcPath)},
      {find: "@styles", replacement: resolve(srcPath + "/assets/styles")},
      {find: "@services", replacement: resolve( srcPath + "/common/types")},
      {find: "@interfaces", replacement: resolve(srcPath + "/common/interfaces")},
      {find: "@constants", replacement: resolve(srcPath + "/common/constants")},
      {find: "@types", replacement: resolve(srcPath + "/common/types")},
      {find: "@utils", replacement: resolve(srcPath + "/common/utils")},
      {find: "@components", replacement: resolve(srcPath + "/modules")},
      // "@styles": srcPath + "assets/styles",
      // "@services": srcPath + "common/types",
      // "@interfaces": srcPath + "common/interfaces",
      // "@constants": srcPath + "common/constants",
      // "@types": srcPath + "common/types",
      // "@utils": srcPath + "common/utils",
      // "@components": srcPath + "/modules"
    ]
  },
})
