import type { MyElement } from "../src";

export default async function testClickEvent(): Promise<void> {
  const testComponent2 = document.getElementById('test-component-2') as MyElement;
  
  /**
   * looksee watches the page for console.info(), console.assert(), and console.error() calls,
   * and sends them to the terminal.
   * console.log()'s are ignored.
   */
  console.info('\n');
  console.info('#test-component-2 renders with attribute value for name and appropriate count after button click event');

  // testComponent2.name='poopsee';
  console.assert(testComponent2.name === 'looksee', `Expected: "looksee" Found: "${testComponent2.name}"`);
  await testComponent2.updateComplete;
  console.assert(
    testComponent2.shadowRoot!.querySelector('h1')!.innerText === 'Hello, looksee!', 
    `Expected: "Hello, looksee" Found: "${testComponent2.shadowRoot!.querySelector('h1')!.innerText}"`
  );

  const button = testComponent2.shadowRoot!.querySelector('button');

  button!.click();
  // button!.click();
  await testComponent2.updateComplete;
  console.assert(testComponent2.count === 1, `Expected: 1 Found: ${testComponent2.count}`);
  console.assert(button!.innerText === 'Click Count: 1', `Expected: "Click Count: 1" Found: ${button!.innerText}`);
}