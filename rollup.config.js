import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default [
  {
    input: './node_modules/apexcharts/dist/apexcharts.js',
    output: {
      file: './apexcharts.js',
      format: 'es',
    },
    plugins: [
      resolve({
        browser: true
      }),
      commonjs(),
    ],
  },
];
