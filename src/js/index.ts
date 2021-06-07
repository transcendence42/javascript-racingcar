import Game from './modules/Game.js';

export default function App(): void {
  Game({
    $app: document.querySelector<HTMLDivElement>('#app'),
  });
}

App();
