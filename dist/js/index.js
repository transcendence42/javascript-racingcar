import Game from './modules/Game.js';
export default function App() {
    Game({
        $app: document.querySelector('#app'),
    });
}
App();
