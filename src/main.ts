import './style.css';
import dfLogo from '/elephant.png';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${dfLogo}" alt="Vite logo" />
  </div>
`;
