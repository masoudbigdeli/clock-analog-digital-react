import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: './index.ts',
      name: 'ReactClockAnalogDigital',
      fileName: (format) =>
        format === 'es' ? `clock-analog-digital-react.esm.js` : `clock-analog-digital-react.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom',],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          // '@emotion/react': 'emotionReact',
          // '@emotion/styled': 'emotionStyled',
        },
      },
    },
  },
  plugins: [dts()],
});
