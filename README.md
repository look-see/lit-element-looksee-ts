# <img align="center" src="https://avatars2.githubusercontent.com/u/76873423" width="96" height="96" /> Typescript Starter Template

This project includes a sample [LitElement](https://lit-element.polymer-project.org) web component using **looksee** with [snowpack](https://www.snowpack.dev).

## Setup

Install dependencies:

```bash
npm i
```

## Dev Server

This sample uses [snowpack](https://www.snowpack.dev) for previewing the project without additional build steps.

Snowpack’s [dev server](https://www.snowpack.dev/concepts/dev-server) is an instant dev environment for unbundled development. It will build a file only when it’s requested by the browser. That means that it can start up instantly (usually in <50ms) and scale to infinitely large projects without slowing down. In contrast, it’s common to see 30+ second dev startup times when building large apps with a traditional bundler.

Snowpack supports JSX & TypeScript source code by default.

The dev server can be run with the `start` script:

```bash
npm start
```

## Testing

Tests are written in vanilla javascript. No, seriously:
```javascript
document.addEventListener("DOMContentLoaded", async () => {
  const testComponent1 = document.getElementById('test-component-1');
  
  /**
   * looksee watches the page for console.info(), console.assert(), and console.error() calls,
   * and sends them to the terminal.
   * console.log()'s are ignored.
   */
  console.info('#test-component-1 renders with default property values');
  
  // testComponent1.name='looksee';
  console.assert(testComponent1.name === 'World', `Expected: "World" Found: "${testComponent1.name}"`);
  await testComponent1.updateComplete;
  console.assert(
    testComponent1.shadowRoot.querySelector('h1').innerText === 'Hello, World!', 
    `Expected: "Hello, World" Found: "${testComponent1.shadowRoot.querySelector('h1').innerText}"`
  );

  // testComponent1.count++;
  console.assert(testComponent1.count === 0, `Expected: 0 Found: ${testComponent1.count}`);
  await testComponent1.updateComplete;
  console.assert(
    testComponent1.shadowRoot.querySelector('button').innerText === 'Click Count: 0', 
    `Expected: "Click Count: 0" Found: "${testComponent1.shadowRoot.querySelector('button').innerText}"`
  );
});
```
When working with components that utilize the shawdow dom, such as [LitElement](https://lit-element.polymer-project.org) does, you need to wrap your tests in a `DOMContentLoaded` event listner. To be sure, it doesn't hurt to wrap all your tests this way.

***If you run the tests in watch mode, you can uncomment the single line comments in the test files and have another looksee on demand.***

Tests can be run with the `test` scripts:

```bash
npm test
```
OR
```bash
npm run test:watch
```
***Make sure to start the dev server first.***

###### Copyright (c) 2021 Allan Mobley Jr. All rights reserved.
###### Licensed under the [MIT](./LICENSE) license.
