import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'modules',
    //打包文件目录
    outDir: 'es',
    //压缩
    minify: true,
    //css分离
    cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue、element-plus
      external: ['vue'],
      input: ['index.js'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          assetFileNames: '[ext]/[name].[ext]',

          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: resolve(__dirname, './dist/es'),
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          assetFileNames: '[ext]/[name].[ext]',

          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: resolve(__dirname, './dist/lib'),
        },
      ],
    },
    lib: {
      entry: './index.js',
      name: 'zyk',
      formats: ['es', 'cjs'],
    },
  },
})
