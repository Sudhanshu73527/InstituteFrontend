import resolve from '@rollup/plugin-node-resolve';

export default {
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
  ],
};
