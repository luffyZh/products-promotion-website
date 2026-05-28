import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 如果你的仓库名称是 products-promotion-website，那么请保留此配置。
  // 如果你要部署到 username.github.io，请把 base 改为 '/'
  base: '/products-promotion-website/',
})
