import './style.css';
import dfLogo from '/kisspng-indian-elephant-african-elephant-elephantidae-anim-aile-5b31860d678455.590351351529972237424.jpg';
import { setupCounter } from './counter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${dfLogo}" alt="Vite logo" />
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
