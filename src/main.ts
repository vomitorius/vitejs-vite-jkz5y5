import './style.css';
import dfLogo from '/dflogo.png';
import { setupCounter } from './counter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${dfLogo}" alt="Vite logo" />
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
