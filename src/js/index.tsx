import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer as HotLoader } from 'react-hot-loader';
import store from './store/store';
import Game from './game/game';

const render = (Component): void => {
  ReactDOM.render(
    <HotLoader>
      <Component compiler="TypeScript" framework="React" store={store} />
    </HotLoader>,
    document.getElementById('game')
  );
};

render(Game);

if (module['hot']) {
  module['hot'].accept('./game/game', () => render(Game));
}
