import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: './node_modules/apexcharts/dist/apexcharts.js',
    output: {
      file: './apexcharts.js',
      format: 'es',
    },
    plugins: [
      commonjs(),
    ],
  },
];
