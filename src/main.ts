import './style.css';
//import viteLogo from '/vite.svg';
//import typescriptLogo from './typescript.svg';
import { setupCounter } from './counter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
