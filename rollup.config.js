import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/library.min.js',
      format: 'iife',
      name: 'Library',
      plugins: [terser()],
    },
    {
      file: 'dist/library.js',
      format: 'iife',
      name: 'Library',
    },
  ],
  plugins: [],
};
