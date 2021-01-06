/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    dev: {url: '/'},
    src: {url: '/'},
    tests: {url: '/'}
  },
  experiments: {
    source: 'skypack',
    optimize: {
      entrypoints: "auto",
      preload: false,
      bundle: false,  
      manifest: false,
      minify: false,
      target: 'es2020',
    }
  },
  plugins: [
    /* ... */
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  testOptions: {
    files: [
      'tests/**/*.ts'
    ]
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
