import type { MyElement } from "../src";

export default async function testDefaultValues(): Promise<void> {
  const testComponent1 = document.getElementById('test-component-1') as MyElement;
  
  /**
   * looksee watches the page for console.info(), console.assert(), and console.error() calls,
   * and sends them to the terminal.
   * console.log()'s are ignored.
   */
  console.info('\n');
  console.info('#test-component-1 renders with default property values');
  
  // testComponent1.name='Wurld';
  console.assert(testComponent1.name === 'World', `Expected: "World" Found: "${testComponent1.name}"`);
  await testComponent1.updateComplete;
  console.assert(
    testComponent1.shadowRoot!.querySelector('h1')!.innerText === 'Hello, World!', 
    `Expected: "Hello, World" Found: "${testComponent1.shadowRoot!.querySelector('h1')!.innerText}"`
  );

  // testComponent1.count++;
  console.assert(testComponent1.count === 0, `Expected: 0 Found: ${testComponent1.count}`);
  await testComponent1.updateComplete;
  console.assert(
    testComponent1.shadowRoot!.querySelector('button')!.innerText === 'Click Count: 0', 
    `Expected: "Click Count: 0" Found: "${testComponent1.shadowRoot!.querySelector('button')!.innerText}"`
  );
}